//WeakMap vs Array ---> Performance

//100 000

let medet = {
    id: 1,
    firstName: 'Medet',
    lastName: 'Berikbay',
  };
  
  let cache = [];
  
  function getFullName(user) {
    // find user in cache
    let cachedUser = cache.find((u) => u.id === user.id);
  
    // if not cached, compute full name and store user in cache
    if (!cachedUser) {
      console.log('not in cache');
      // VERY HAAAAVYYY COMPUTATION
      user.fullName = `${user.firstName} ${user.lastName}`;
  
      cache.push(user);
      return user.fullName;
    }
    // if cached, return full name from cache
    else {
      console.log('Full name was taken from cache');
      return cachedUser.fullName;
    }
  }
  
  console.log('------------ ARRAY ------------');
  console.log(getFullName(medet));
  console.log(getFullName(medet));
  
  //Gamer Medet left ARCADE
  medet = null;
  //console.log(getFullNameUsingWeakMap(medet));
  console.log(cache);
  
  //Утечка памяти
  //Memory Leak
  
  let siddiq = {
    id: 1,
    firstName: 'Siddiq',
    lastName: 'Hasanov',
  };
  
  let cacheWeak = new WeakMap();
  
  function getFullNameUsingWeakMap(user) {
    // check if user's full name is in cache
    if (!cacheWeak.has(user)) {
      // if not in cache, compute full name and store in cache
      console.log('not in cache');
      let fullName = `${user.firstName} ${user.lastName}`;
      cacheWeak.set(user, fullName);
    }
    // get full name from cache
    return cacheWeak.get(user);
  }
  
  console.log('------------ WeakMap ------------');
  
  console.log(getFullNameUsingWeakMap(siddiq));
  console.log('---->', cacheWeak.has(siddiq));
  //Gamer Medet left ARCADE
  siddiq = null;
  //console.log(getFullNameUsingWeakMap(medet));
  console.log('After siddiq=null --->', cacheWeak.has(siddiq));
  
  console.log('======== EXample of weakSet======');
  
  let player1 = { id: 1, name: 'Player 1' };
  let player2 = { id: 2, name: 'Player 2' };
  //... many more players
  
  let inactivePlayers = [];
  
  // When a player becomes inactive
  inactivePlayers.push(player1);
  
  // Check if a player is inactive
  if (inactivePlayers.find((p) => p.id === player1.id)) {
    console.log(`${player1.name} is inactive`);
    inactivePlayers.shift(0);
    console.log(inactivePlayers);
  }
  
  let player3 = { id: 1, name: 'Player 1' };
  let player4 = { id: 2, name: 'Player 2' };
  
  let inactivePlayersWaekSet = new WeakSet();
  // When a player becomes inactive
  inactivePlayersWaekSet.add(player3);
  
  // Sometime later, player1 is removed from the game and not referenced anymore
  player3 = null;
  
  // Check if a player is inactive
  if (!inactivePlayersWaekSet.has(player3)) {
    console.log(`${inactivePlayersWaekSet.has(player3)} is inactive`);
    console;
  }
  