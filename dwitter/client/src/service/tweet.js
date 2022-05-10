export default class TweetService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  tweets = [
    {
      id: 1,
      text: "드림코딩에서 강의 들으면 너무 좋으다",
      createdAt: "2021-05-09T04:20:57.000Z",
      name: "Bob",
      username: "bob",
      url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
    },
  ];

  async getTweets(username) {
    const query = username ? `?username=${username}` : "";
    const response = await fetch(`${this.baseURL}/tweets/${query}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
    // return username
    //   ? this.tweets.filter((tweet) => tweet.username === username)
    //   : this.tweets;
  }

  async postTweet(text) {
    const response = await fetch(`${this.baseURL}/tweets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, username: "ellie", name: "ellie" }),
    });
    const data = await response.json();
    if (response.status !== 201) {
      throw new Error(data.message);
    }
    return data;

    // const tweet = {
    //   id: Date.now(),
    //   createdAt: new Date(),
    //   name: "Ellie",
    //   username: "ellie",
    //   text,
    // };
    // this.tweets.push(tweet);
    // return tweet;
  }

  async deleteTweet(tweetId) {
    const response = await fetch(`${this.baseURL}/tweets/${tweetId}'`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.status !== 204) {
      throw new Error();
    }

    // this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
  }

  async updateTweet(tweetId, text) {
    const response = await fetch(`${this.baseURL}/tweets/${tweetId}'`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    console.log(data);
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;

    // const tweet = this.tweets.find((tweet) => tweet.id === tweetId);
    // if (!tweet) {
    //   throw new Error("tweet not found!");
    // }
    // tweet.text = text;
    // return tweet;
  }
}
