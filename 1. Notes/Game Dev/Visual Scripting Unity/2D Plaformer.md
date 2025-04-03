tags: #Physic #GameDev #Programming

# Problems
---

### player sprite clip into the ground for a brief momment after jumping

*reason:* The physic engine update less often than screen 

*solution:* Change [Collision Detection](Collision.md) in the player's object 
- [RigidBody2D](RigidBody.md) from [Discrete](Discrete-and-Continuous.md) -> [Continuous](Discrete-and-Continuous)
