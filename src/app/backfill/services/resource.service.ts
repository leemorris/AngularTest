import { Injectable } from '@angular/core';
import { Resource } from '../resource/models/resource';
import { RESOURCES } from '../common/mock data/mock-resources';

@Injectable()
export class ResourceService {

  constructor() { }
getResources(): Array<Resource> {
  return RESOURCES;
}
}
