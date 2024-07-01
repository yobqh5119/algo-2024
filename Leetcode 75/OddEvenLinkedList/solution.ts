/**
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
    if (head === null || head.next === null) { // - Handle edge case, if the list is empty or if it has only one node, return the head as is
      return head
    }

    let odd: ListNode = head; // current odd-indexed node starting with head
    let even: Listnode = head.next; // current even-indexed node starting with second node
    let evenHead: ListNode = even // - keeps track of the head of even-indexed node

    while(even !== null && even.next !== null) { // - as long as even and even.next are not null
      odd.next = even.next // - connect current odd node to the next odd node
      odd = odd.next // moving the odd pointer to the next odd node
      even.next = odd.next // - connect current even node to the next even node
      even = even.next // moving the even poitner to the next even node
    }

    odd.next = evenHead // connect the last odd node to the head of the even nodes
    return head;
};