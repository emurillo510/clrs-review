#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAXSIZE 100

struct stack {
    int top;
    int capacity;
    int* array;
};

struct stack* create_stack(int capacity)
{
    struct stack* st = (struct stack*) malloc(sizeof(struct stack));
    st->top = -1;
    st->capacity = MAXSIZE;
    st->array = (int *) malloc(sizeof(int) * st->capacity);
    return st;
}

void push(struct stack* st, int data)
{
    st->array[++st->top] = data;
}

int pop(struct stack* st)
{
    return st->array[st->top--];
}

int peek(struct stack* st)
{
    return st->array[st->top];
}

bool is_empty(struct stack* st)
{
    if(st->top == -1)
        return 0;
    else 
        return -1;
}


int main()
{

   struct stack* st = (struct stack*) malloc(sizeof(struct stack));
   st = create_stack(MAXSIZE);

   push(st, 69);
   printf("top: %d\n", st->top);
   printf("top element: %d\n", st->array[st->top]);

   int popped = pop(st);
   printf("top location: %d\n", st->top);
   printf("popped element: %d\n", popped);

   int peeked = peek(st);
   printf("top location: %d\n", st->top);
   printf("peeked element: %d\n", peeked);

   push(st, 52);
   printf("top: %d\n", st->top);
   printf("top element: %d\n", st->array[st->top]);

   int peeked2 = peek(st);
   printf("top location: %d\n", st->top);
   printf("peeked2 element: %d\n", peeked2);

   pop(st);
   printf("is_empty : %d\n", is_empty(st));

   return 0;

}