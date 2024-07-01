# Solution
  - TODO: I need to revisit this as I am having hard time understanding the logic behind linked list and nodeList concept.
  - Providing some context on the solution I found to refer to when I revisit this problem


ListNode:
ListNode is a class that represents a node in a singly-linked list. It typically looks like this:
typescriptCopyclass ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
Each node has a value (val) and a pointer to the next node (next).
The ! operator:
In TypeScript, ! is the non-null assertion operator. It tells the TypeScript compiler that we're certain the value isn't null or undefined. We use it here because TypeScript can't be sure that slow isn't null at that point, but we know it can't be based on our logic.

Now, let's break down the problem and solution:
Problem:
We need to delete the middle node of a linked list. For a list with n nodes, the middle node is the ⌊n / 2⌋th node (using 0-based indexing).
Solution approach:
We use the "slow and fast pointer" technique:

The fast pointer moves two steps at a time.
The slow pointer moves one step at a time.
When the fast pointer reaches the end, the slow pointer will be at the middle.

Here's a step-by-step explanation of the code:
typescriptCopyfunction deleteMiddle(head: ListNode | null): ListNode | null {
    // Handle edge cases
    if (head === null || head.next === null) {
        return null;
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let prev: ListNode | null = null;

    // Find the middle node
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;  // Move two steps
        prev = slow;            // Keep track of the node before slow
        slow = slow!.next;      // Move one step
    }

    // Delete the middle node
    if (prev !== null) {
        prev.next = slow!.next;
    }

    return head;
}

We first handle edge cases: if the list is empty or has only one node, we return null.
We initialize three pointers: slow, fast, and prev.
We move fast two steps and slow one step at a time until fast reaches the end.
At this point, slow is at the middle node, and prev is just before it.
We delete the middle node by setting prev.next to slow.next, skipping the middle node.
We return the head of the modified list.

The ! in slow!.next is used because we know slow can't be null at that point, but TypeScript needs this assurance.
This solution efficiently finds and removes the middle node in one pass through the list.