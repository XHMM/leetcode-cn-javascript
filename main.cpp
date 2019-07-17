#include <iostream>
#include "CircularQueue.h"
#include "CodingInterview.h"
#include "Test.h"
using namespace std;

void circularQueueTest() {
    CircularQueue q(5);
    bool a = q.enQueue(1);
    bool b = q.enQueue(2);
    bool c = q.enQueue(3);
    bool d = q.enQueue(4);
    bool e = q.enQueue(5);
    bool f = q.enQueue(6);
    cout << a << b << c << d << e << f << endl;
}
void duplicateElementTest() {
    vector<int> arr = {1,2,3,1};
    int res = CodingInterview::getDuplicateNumberInArray(arr);
    cout<< res <<endl;
}
void duplicateNumberInArrayNoEditTest() {
  vector<int> arr = {1,2,3,4,3};
  int res = CodingInterview::getDuplicateNumberInArrayNoEdit(arr);
  cout<< res <<endl;
}

int main() {
    // circularQueueTest();
    // duplicateElementTest();
    duplicateNumberInArrayNoEditTest();
    return 0;
}