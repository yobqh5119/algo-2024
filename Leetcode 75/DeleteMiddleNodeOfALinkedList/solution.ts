 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }


const deleteMiddleNode = (head: ListNode || null): ListNode => {
  if (head === null && head.next === null) {
    return null
  }

  let fast: ListNode || null = head
  let slow: ListNode || null = head
  let prev: ListNode || null = null

  while (fast!== null && fast.next !== null) {
    fast = fast.next.next
    prev = slow
    slow = slow.next
  }

  if (prev !== null) {
    prev.next = slow.next
  }

  return head
}