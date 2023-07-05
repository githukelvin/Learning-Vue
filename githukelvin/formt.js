// vueschool forum data
data = {
  categories: [
    {
      id: 'c1',
      name: 'Debgugging',
      forums: ['f1']
    }
  ],
  forums: [
    {
      id: 'f1',
      name: 'Project Ideas',
      description: 'A place to discuss ideas and brainstorm projects.',
      categoryId: 'c1',
      threads: ['t1']
    }
  ],
  threads: [
    {
      id: 't1',
      title: 'First Project',
      publishedAt: 16888888,
      posts: [],
      userId: 'u1'
    }
  ],
  posts: [
    {
      id: 'p1',
      publishedAt: 16888888,
      userId: 'ui',
      text: 'i like coding',
      threadId: 't1'
    }
  ],
  users: [
    {
      id: 'u1',
      name: 'kelvin'
    }
  ]
}
// thread=

data.posts.filter(post => post.userId === 'u1')
