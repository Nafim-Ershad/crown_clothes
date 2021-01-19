import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore.collection('users').doc('GjTSvJ6bAZYv1MAv7WvT').collection('cart-items').doc('3VkJDJqlXVYq3WSWQpFK');

// firestore.doc('/users/GjTSvJ6bAZYv1MAv7WvT/cart-items/3VkJDJqlXVYq3WSWQpFK');
// firestore.collection('/users/GjTSvJ6bAZYv1MAv7WvT/cart-items');