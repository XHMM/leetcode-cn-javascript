#include<iostream>
#include<iomanip>
using namespace std;
class coord
{
private:
  int x,y;
public:
  coord(int i=0,int j=0);
  void print();
  friend coord operator ++(coord op);
};

coord::coord(int i,int j)
{
  x=i;
  y=j;
}

void coord::print()
{
  cout<<"x:"<<x<<setw(5)<<"y:"<<y<<endl;
}
coord operator ++(coord op)
{
  ++op.x;
  op.y+=1;
  cout<<op.x;
  return op;
}


int main()
{
  coord ob(10,20);
  ob.print();
  ++ob;
  ob.print();
  return 0;
}
