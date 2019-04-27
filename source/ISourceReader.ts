/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

export interface ISourceReader {
     rawStream(parameters:string) : Promise<string>;
}
