
// Base abstract class for designing strategies on Steer
// To read about strategy's interface see https://docs.steer.finance/Strategies/interface-api 
export abstract class BaseStrategy {

    static version: i32 = 2;

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

    // Check the releases and docs for the latest features, interfaces, and support
    getVersion(): i32{
        return BaseStrategy.version;
    }
}