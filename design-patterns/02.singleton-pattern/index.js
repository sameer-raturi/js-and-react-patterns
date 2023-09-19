let instance;

// Within the constructor, we check to make sure the class hasn't already been instantiated.
class DBConnection {
  constructor(uri) {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    this.uri = uri;
    instance = this;
  }

  connect() {
    console.log(`DB ${this.uri} has been connected!`);
  }

  disconnect() {
    console.log("DB disconnected");
  }
}

// 2. Setting a variable equal to the the frozen newly instantiated object, by using the built-in `Object.freeze` method.
// This ensures that the newly created instance is not modifiable.
const connection = Object.freeze(new DBConnection("mongodb://..."));

// 3. Exporting the variable as the `default` value within the file to make it globally accessible.
export default connection;
