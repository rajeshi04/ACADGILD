function PropertyDecorator(
    target: Object, // The prototype of the class
    key: string | symbol // The name of the property
    ) {
    console.log("PropertyDecorator called on: ", target, propertyKey);
}

class PropertyDecoratorExample {
    @PropertyDecorator
    name: string;
}