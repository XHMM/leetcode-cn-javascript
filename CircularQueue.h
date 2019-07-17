#include <vector>

using std::vector;

class CircularQueue {
private:
    int head;
    int tail;
    int size;
    vector<int> data;
public:
    explicit CircularQueue(int s) {
        size = s;
        head = -1;
        tail = -1;
        data.resize(s);
    };

    bool enQueue(int value) {
        if (isFull())
            return false;
        if (isEmpty()) {
            head = tail = 0;
        } else {
            tail = (tail + 1) % size;
        }
        data[tail] = value;
        return true;
    };

    bool deQueue() {
        if (isEmpty())
            return false;
        if (head == tail) {
            head = tail = -1;
            return true;
        }
        head = (head + 1) % size;
        return true;
    };

    bool isEmpty() { return head == -1 && tail == -1; };

    // 没有元素则返回-1
    bool isFull() { return (tail + 1) % size == head; };

    int getHeadValue() {
        if (isEmpty())
            return -1;
        return data[head];
    };

    // 没有元素则返回-1
    int getTailValue() {
        if (isEmpty())
            return -1;
        return data[tail];
    };
};