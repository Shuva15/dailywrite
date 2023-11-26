export const getPosts = `
import WriteDaily from 0xe5693d4d27e108c1

pub fun main(): [[String]] {
  return WriteDaily.allPosts
}
`