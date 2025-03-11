#include <iostream>
#include <vector>
using namespace std;

// Task 1
int sumRecursive(int n) {
    if (n == 0) return 0;
    return n + sumRecursive(n - 1);
}

int sumIterative(int n) {
    int sum = 0;
    for (int i = 1; i <= n; i++) sum += i;
    return sum;
}

// Task 2
bool isPrimeRecursive(int n, int i = 2) {
    if (n <= 2) return n == 2;
    if (n % i == 0) return false;
    if (i * i > n) return true;
    return isPrimeRecursive(n, i + 1);
}

bool isPrimeIterative(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++)
        if (n % i == 0) return false;
    return true;
}

// Task 3
void merge(vector<int> &arr, int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    vector<int> L(n1), R(n2);
    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int i = 0; i < n2; i++) R[i] = arr[m + 1 + i];
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSortRecursive(vector<int> &arr, int l, int r) {
    if (l >= r) return;
    int m = l + (r - l) / 2;
    mergeSortRecursive(arr, l, m);
    mergeSortRecursive(arr, m + 1, r);
    merge(arr, l, m, r);
}

void mergeSortIterative(vector<int> &arr) {
    int n = arr.size();
    for (int curr_size = 1; curr_size < n; curr_size *= 2) {
        for (int left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
            int mid = min(left_start + curr_size - 1, n - 1);
            int right_end = min(left_start + 2 * curr_size - 1, n - 1);
            merge(arr, left_start, mid, right_end);
        }
    }
}

int main() {
    int sumN;
    cout << "Enter n for sum: ";
    cin >> sumN;
    cout << "Recursive Sum: " << sumRecursive(sumN) << endl;
    cout << "Iterative Sum: " << sumIterative(sumN) << endl;

    int primecheck;
    cout << "\nEnter n to check prime: ";
    cin >> primecheck;
    cout << "Recursive Prime Check: " << isPrimeRecursive(primecheck) << endl;
    cout << "Iterative Prime Check: " << isPrimeIterative(primecheck) << endl;

    int n1, n2;
    cout << "\nEnter sizes of arrays: ";
    cin >> n1 >> n2;

    vector<int> arr1(n1), arr2(n2);
    
    cout << "Enter elements of array1: ";
    for (int i = 0; i < n1; i++) cin >> arr1[i];
    
    cout << "Enter elements of array2: ";
    for (int i = 0; i < n2; i++) cin >> arr2[i];

    mergeSortRecursive(arr1, 0, n1 - 1);
    for(int i=0;i<n1;i++){
        cout<<arr1[i]<<" ";
        
    }
    cout<<'\n';
    mergeSortIterative(arr2);
    for(int i=0;i<n2;i++){
        cout<<arr2[i]<<" ";
        
    }
    cout<<'\n';
    return 0;
}

