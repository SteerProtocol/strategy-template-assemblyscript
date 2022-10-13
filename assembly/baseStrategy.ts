import { JSON } from "assemblyscript-json";

// Base abstract class for designing strategies on Steer
// To read about strategy's interface see https://docs.steer.finance/Strategies/interface-api 
export abstract class BaseStrategy {

    // Sets any strategy-specific parameters 
    constructor(config: string){};

    // The stringified output from the data connectors (if any) are passed in.
    execute(dataConnectorsOutput: string): string { 
        // Refer to https://docs.steer.finance/Strategies/interface-api#interface
        return 'This output will need to be a stringified transactionRequest object';
    };

    // Returns the configuration 
    config(): string {
        // Refer to this example https://docs.steer.finance/Strategies/interface-api#example-assemblyscript 
        return 'This should be a react-json-schema for creating the manifest';
    };

    // For supporting future improvements of our bundling interface and system
    // Check releases to see what new versions bring and what is best for you.
    version(): i32 {
        // You probably won't overwrite this function
        return 2;
    };
}