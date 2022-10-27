const redis = require("redis");

const redisClient = redis.createClient({
  url: "redis://localhost:6379",
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
  } catch (err) {
    console.log(err);
  }
};

redisClient.on("connect", () => {
  console.log("redis connected");
});

redisClient.on("error", err => {
  console.log("Error occured while connecting to redis server.");
});

redisClient.on("redy", () => {
  console.log("Client conneted to redis and ready to use");
});

redisClient.on("end", () => {
  console.log("Disconnected from redis");
});

connectRedis();

module.exports = redisClient;
