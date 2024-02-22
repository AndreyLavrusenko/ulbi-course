import { CounterSchema } from "entities/Couter";
import { UserSchema } from "entities/User";

export interface StateSchema {
	counter: CounterSchema,
	user: UserSchema
}
