#include <iostream>
#include <vector>
#include <stack>
#include "Common.cc"

class Solution {
public:
  static std::vector<int> postorderTraversal(TreeNode *root) {
    std::vector<int> result{};

    std::stack<TreeNode*> stack;
    TreeNode* cur = root;
    while(cur != nullptr) {
      stack.push(cur);
      cur = cur->left;
    }

    TreeNode* tmp;
    while(!stack.empty()) {
      cur = stack.top();
      if (cur->right == nullptr || cur->right == tmp) {
        result.push_back(cur->val);
        tmp = cur;
        stack.pop();
      } else {
        cur = cur->right;
        while (cur) {
          stack.push(cur);
          cur = cur->left;
        }
      }
    }
    return result;
  };
};

int main() {
  std::vector<int> res = Solution::postorderTraversal(getTree());
  for(auto val:res) {
    std::cout<<val<<std::endl;
  }
  return 0;
}