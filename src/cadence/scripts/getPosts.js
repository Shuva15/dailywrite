export const getPosts = `
import DailyWrite from 0xfb0a033ba41d3662

pub fun main(): [String] {
  return DailyWrite.allPosts
}
`