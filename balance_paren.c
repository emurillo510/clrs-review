#include <stdio.h>
#include <stdlib.h>

/*
  given an expression string exp.

  write a program to examine whether the pairs and the orders of
  "{","}","(",")","[","]" are correct exp.

  For example, the program should print true for exp = “[()]{}{[()()]()}”
  and false for exp = "[(])"

  [ push
  ( push

  ) pop stack and check if matching paren 
  ] pop stack and check if matching paren

  { push
  } pop stack and check if matching paren

  { push
  [ push
  ( push

  ) pop stack and check if matching paren
  ( push
  ) pop stack and check if matching paren
  ] pop stack and check if matching paren
  ( push
  ) pop stack and check if matching paren
  } pop stack and check if matching paren

  // check if stack is empty


  high level: 

  1. iterate the string
  2. if open paren push to stack
  3. if closing paren pop stack and check if they match
  4. if done iterating see if stack is empty
  5. if stack is empty return true else false




*/

struct stack {
    int top;
    int capacity;
    char* array;
};

struct stack* create_stack(int capacity)
{
    struct stack* st = (struct stack*) malloc(sizeof(struct stack));
    st->top = -1;
    st->capacity = capacity;
    st->array = (char*) malloc(sizeof(char) * capacity);

    return st;
}

void push(struct stack* st, char data)
{
    st->array[++st->top] = data;
}

char pop(struct stack* st)
{
    return st->array[st->top--];
}

char peek(struct stack* st)
{
    return st->array[st->top];
}

int is_empty(struct stack* st)
{
    return (st->top == -1);

}

int is_balance_paren(char* exp)
{
    struct stack* st = create_stack(sizeof(exp));

    int i = 0;
    char cur;

    while(exp[i])
    {
        cur = exp[i++];
        printf("%c\n", cur);

        if(cur == '(' || cur == '{' || cur == '['){ 
            push(st, cur);
        } else if(cur == ')' || cur == '}' || cur == ']'){
            char pair = pop(st);
            if(cur == ')' && pair == '(') continue;
            else if(cur == '}' && pair == '{') continue;
            else if(cur == ']' && pair == '[') continue;
            else return -1;
        }
    }

    if(st->top == -1)
        return 0;
    else 
        return -1;
}

int main()
{
    char* exp = "[()]{}{[()()]()}";
    //char* exp = "[(])";
    int output = is_balance_paren(exp);
    printf("result: %d\n", output);
  return 0;
}