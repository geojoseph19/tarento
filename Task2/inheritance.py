#Inheritance

class A:
  def fun(self):
    print("This is class A.")

class B(A):
  def fun(self):
    print("This is class B.")


obj = B()

obj.fun()

