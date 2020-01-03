#include <vector>
#include <iostream>

class BruteForce {
private:
  static int bruteForce(const std::string& a, const std::string& b) {
    for(int m = 0; m<a.length() - b.length() + 1; m++) {
      unsigned int count = 0;
      for(int n =0; n< b.length(); n++) {
        if(a.at(m + count) != b.at(n)) break;
        else {
          count++;
        }
      }
      if(count == b.length()) return m;
    }
    return -1;
/*  // while loop
    unsigned int i = 0;
    unsigned int j = 0;
    while (i < a.length() && j < b.length()) {
      if (a[i] == b[j]) {
        i++;
        j++;
      } else {
        i++;
        j = 0;
      }
    }
    if (j == b.length()) {
      return i - b.length();
    }
    return -1;*/
  }

public:
  static void test() {
    std::string str = "abcdABCD EFaadfk32!@#34flasf dafe";
    std::vector<std::string> subs = {
        "abcde", "ABCD EF", "fe", "!@#", "asf dafe", "afea"
    };
    for(const auto& sub : subs) {
      std::cout << BruteForce::bruteForce(str, sub) << std::endl;
    }
  }
};

int main() {
  BruteForce::test();
  return 0;
}