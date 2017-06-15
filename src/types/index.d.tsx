declare namespace ig {
  type gemValue =
    | 1
    | 2
    | 3
    | 4
    | 5 // *2
    | 7 // *2
    | 9
    | 11 // *2
    | 13
    | 14
    | 15
    | 17;

  type hazardTypes =
    | 'bug'
    | 'bomb'
    | 'user'
    | 'fire'
    | 'bolt';

  type hazardCount = {[hazard in hazardTypes]: number};

  type iconName =
    | 'diamond'
    | 'trophy'
    | hazardTypes;
}
