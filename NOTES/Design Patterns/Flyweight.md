“separating out an object’s data into two kinds. The
first kind of data is the stuff that’s not specific to a single instance of that object and can be shared across all of them. The Gang of Four calls this the intrinsic state, but I like to think of it as the “context-free” stuff. In the example here, this is the geometry and textures for the tree. The rest of the data is the extrinsic state, the stuff that is unique to that instance. In this case, that is each tree’s position, scale, and color. Just like in the chunk of sample code up there, this pattern saves memory by sharing one copy of the intrinsic state across every place where an object appears.”