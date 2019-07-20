//
// Created by xh on 2019/7/16.
//
#ifndef ALGORITHM_TEST_H
#define ALGORITHM_TEST_H

#include <iostream>

class Base {
protected:
  static int add() {
    return 1;
  }
};
class Child : Base {
public:
  void test() {
    std::cout<< Child::add() << Base::add();
  }
};
#endif //ALGORITHM_TEST_H
