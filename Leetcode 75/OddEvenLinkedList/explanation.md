# Solution 
  - TODO: This linked list problem with node I would need to revisit as well

  - Contextual background information on the solution


To solve this problem, we can use two pointers to separate the odd and even indexed nodes, and then connect them at the end. Here's a step-by-step solution in TypeScript:
`
typescriptCopy/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function oddEvenList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }

    let odd: ListNode = head;
    let even: ListNode = head.next;
    let evenHead: ListNode = even;

    while (even !== null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;

    return head;
}


Let's break down how this solution works:

First, we handle the edge cases:

If the list is empty or has only one node, we return the head as is.


We initialize three pointers:

odd: points to the current odd-indexed node, starting with the head.
even: points to the current even-indexed node, starting with the second node.
evenHead: keeps track of the head of the even-indexed nodes.


We enter a loop that continues as long as even and even.next are not null:

We connect the current odd node to the next odd node: odd.next = even.next
We move the odd pointer to the next odd node: odd = odd.next
We connect the current even node to the next even node: even.next = odd.next
We move the even pointer to the next even node: even = even.next


After the loop ends, we connect the last odd node to the head of the even nodes: odd.next = evenHead
Finally, we return the head of the reordered list.

This solution efficiently reorders the list:

It only requires one pass through the list, achieving O(n) time complexity.
It reorders the nodes in-place without using any extra space, achieving O(1) space complexity.
It maintains the relative order of nodes within the odd and even groups.

Time Complexity: O(n), where n is the number of nodes in the list. We traverse the list once.
Space Complexity: O(1), as we only use a constant amount of extra space regardless of the input size.
This approach effectively groups all odd-indexed nodes followed by even-indexed nodes while maintaining their relative order within each group, as required by the problem.