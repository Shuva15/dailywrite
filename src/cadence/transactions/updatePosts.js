export const updatePosts = `
import DailyWrite from 0x05

transaction(post: String) {

  prepare(acct: AuthAccount) {
    
  }

  execute {
   DailyWrite.addPost(post: post)
   }
}
`