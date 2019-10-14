function logs(log?: string) {
  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const oldValue = descriptor.value;

    descriptor.value = function() {
      if (process.env.NODE_ENV !== "production") {
        console.log(
          `Calling ${target.constructor.name} >>>>>> ${log || propertyKey}, the params with: `,
          ...arguments
        );
      }

      return oldValue.apply(this, arguments);
    };

    return descriptor;
  }
}

export default logs