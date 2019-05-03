/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

export interface ISourceReader {
     deleteFile(filePath?:string):void;
     rawStream(filePath?:string) : Promise<string>;
     writteToFile(data:string, filepath?: string):void;
}
