import { Injectable } from '@angular/core';
import { Match } from '../match/models/match';

@Injectable()
export class MatchService {

  constructor() { }
  getMatches(): Array<Match> {
    return new Array<Match>();

  }
}
