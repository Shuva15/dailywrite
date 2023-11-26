export const updatePosts = `
import WriteDaily from 0xe5693d4d27e108c1

transaction(post: [String]) {

  prepare(acct: AuthAccount) {
    
  }

  execute {
    WriteDaily.addPost(post: post)
   }
}
`