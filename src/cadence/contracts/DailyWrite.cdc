pub contract  DailyWrite {
    pub var allPosts: [String]

    pub fun addPost(post: String) {
        self.allPosts.append(post)
    }

    init() {
        self.allPosts = []
    }
}