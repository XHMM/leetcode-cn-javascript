#include <vector>
#include <iostream>

class CircularQueue {
private:
    int head;
    int tail;
    int size;
    std::vector<int> data;
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
public:
  static void test() {
    CircularQueue q(5);
    bool a = q.enQueue(1);
    bool b = q.enQueue(2);
    bool c = q.enQueue(3);
    bool d = q.enQueue(4);
    bool e = q.enQueue(5);
    bool f = q.enQueue(6);
    std::cout << a << b << c << d << e << f << std::endl;
  }
};

int main() {
  return 0;
}