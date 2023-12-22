import { sendError } from "../utils/send-error.utils";

/**
 * Decorator for wrapping a function with try catch block.
 */
export default function ErrorHandler(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = async function (...args: any[]) {
    try {
      return await originalMethod.apply(this, args);
    } catch (error: any) {
      const ctx = args[0];
      sendError(ctx, error);
    }
  };
  return descriptor;
}
