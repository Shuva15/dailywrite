export const updatePosts = `
import DailyWrite from 0xfb0a033ba41d3662

transaction(post: String) {

  prepare(acct: AuthAccount) {
    
  }

  execute {
   DailyWrite.addPost(post: post)
   }
}
`