import Topbar from '@/components/Topbar/Topbar';
import Workspace from '@/components/Workspace/Workspace';
import { problems } from '@/utils/problems';
import type { Problem } from '@/utils/types/problems';
import React from 'react';

type ProblemPageProps = {
    problem: Problem;
};

const ProblemPage:React.FC<ProblemPageProps> = ({problem}) => {
    console.log(problem)
    return <div>
        <Topbar problemPage />
        <Workspace problem={problem}/>
    </div>
}
export default ProblemPage;

//fetching local data
//SSG
//getStaticPath->creates dynamic routes

export async function getStaticPaths() {
    const paths = Object.keys(problems).map((key) => ({
        params: { pid: key }
    }))

    return {
        paths,
        fallback: false  // Change this from false to "blocking"
    };
}


//getStaticProps=>fetch data

export async function getStaticProps({params}:{params:{pid:string}}){
    const {pid}= params;
    const problem = problems[pid];
    if(!problem){
        return{
            notFound:true
        }
    }
    problem.handlerFunction = problem.handlerFunction.toString();
    return{
        props:{
            problem
        }
    }
}