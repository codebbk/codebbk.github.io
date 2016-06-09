window.effects = {

    // always use unique IDs, and don't ever change an ID once you've set it
    // IDs must always be greater than 0
    // last ID used: 31
    // Use p.type instead of p.unit.type here

    '바로크 워크스 (pre-v4.0)': {
        description: '격투타입이 아닌경우 스탯의 90% 감소',
        thumb: 462,
        id: 1, // don't change this
        atk: function(p) { return !p.class.has('격투') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('격투') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('격투') ? 0.1 : 1; }
    },

    '바로크 워크스': {
        description: '격투타입,진화재료,강화재료 를 제외한 타입의 공격력 90%감소',
        thumb: 462,
        id: 2, // don't change this
        atk: function(p) { return p.class.has('격투') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('격투') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('격투') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; }
    },

    '죄수 크로커다일(pre-v4.0)': {
        description: '타격타입이 아닌경우 스탯의 90% 감소',
        thumb: 510,
        id: 3, // don't change this
        atk: function(p) { return !p.class.has('타격') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('타격') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('타격') ? 0.1 : 1; }
    },

    '죄수 크로커다일': {
        description: '타격타입,진화재료,강화재료 를 제외한 타입의 공격력 90%감소',
        thumb: 510,
        id: 4, // don't change this
        atk: function(p) { return p.class.has('타격') || p.class.has('진화용') || p.class.has('렙업용') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('타격') || p.class.has('진화용') || p.class.has('렙업용') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('타격') || p.class.has('진화용') || p.class.has('렙업용') ? 1 : 0.1; }
    },

    '부간수장 도미노 (pre-v4.0)': {
        description: '사격타입이 아닌경우 스탯의 90% 감소',
        thumb: 538,
        id: 5, // don't change this
        atk: function(p) { return !p.class.has('사격') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('사격') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('사격') ? 0.1 : 1; }
    },

    '부간수장 도미노': {
        description: '사격타입,진화재료,강화재료 를 제외한 타입의 공격력 90%감소',
        thumb: 538,
        id: 6, // don't change this
        atk: function(p) { return p.class.has('사격') || p.class.has('진화용') || p.class.has('렙업용') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('사격') || p.class.has('진화용') || p.class.has('렙업용') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('사격') || p.class.has('진화용') || p.class.has('렙업용') ? 1 : 0.1; }
    },

    '옥졸장 사디짱 (pre-v4.0)': {
        description: '참격타입이 아닌경우 스탯의 90% 감소',
        thumb: 550,
        id: 7, // don't change this
        atk: function(p) { return !p.class.has('참격') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('참격') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('참격') ? 0.1 : 1; }
    },

    '옥졸장 사디짱': {
        description: '참격타입,진화재료,강화재료 를 제외한 타입의 공격력 90%감소',
        thumb: 550,
        id: 8, // don't change this
        atk: function(p) { return p.class.has('참격') || p.class.has('진화용') || p.class.has('렙업용') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('참격') || p.class.has('진화용') || p.class.has('렙업용') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('참격') || p.class.has('진화용') || p.class.has('렙업용') ? 1 : 0.1; }
    },

    '샨디아의 전사들': {
        // Note: The debuff is applied to normal attacks but not to specials
        description: '하늘섬 캐릭터가 아닌경우 스탯의 20% 감소',
        thumb: 583,
        id: 9, // don't change this
        atk: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584, 780, 781 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        },
        hp: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        },
        rcv: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        }
    },

    '샨디아의 전사들, 마지막 라운드': {
        // Note: The debuff is applied to normal attacks but not to specials
        // Note 2: The 50% reduction is applied to enemy's defense as well, for whatever reason
        description: '하늘섬 캐릭터가 아닌경우 스탯의 20% 감소, 심 속성 캐릭터의 공격력 50% 감소',
        thumb: 583,
        id: 10, // don't change this
        atk: function(p) {
            var result = window.effects['샨디아의 전사들'].atk(p);
            return (p.type == 'PSY' ? 0.5 : 1) * result;
        },
        hp: function(p) { return window.effects['샨디아의 전사들'].hp(p); },
        rcv: function(p) { return window.effects['샨디아의 전사들'].rcv(p); },
    },

    '간 폴': {
        description: '자유타입,진화재료,강화재료 를 제외한 타입의 공격력 90%감소',
        thumb: 713,
        id: 11, // don't change this
        atk: function(p) { return p.class.has('자유') || p.class.has('진화용') || p.class.has('렙업용') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('자유') || p.class.has('진화용') || p.class.has('렙업용') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('자유') || p.class.has('진화용') || p.class.has('렙업용') ? 1 : 0.1; }
    },

    '속성 증폭 (1.05x)': {
        description: '속성 효과가 1.05배 증폭된다.',
        thumb: 768,
        id: 12, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.05 : (p.orb == 0.5 ? 20/21 : 1); }
    },

    '속성 증폭 (1.10x)': {
        description: '속성 효과가 1.10배 증폭된다.',
        thumb: 415,
        id: 13, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.1 : (p.orb == 0.5 ? 10/11 : 1); }
    },

    '체인계수 제한 (2.0x)': {
        description: '체인계수가 2.0x 로 제한',
        thumb: 772,
        id: 14, // don't change this
        chainLimiter: function() { return 2.0; }
    },

    'Hit barrier (11 hits)': {
        description: 'Nullifies the first 11 hits in the chain',
        thumb: 794,
        id: 15, // don't change this
        comboShield: 11
    },

    'Nightmare Luffy, 2nd stage': {
        description: 'Limits chain multiplier to 2.0x, nullifies the first 11 hits in the chain',
        thumb: 795,
        id: 16, // don't change this
        comboShield: 11,
        chainLimiter: function() { return 2.0; }
    },

    'Attack reduction (50%)': {
        description: 'ATK of all units reduced by 50%',
        thumb: 546,
        id: 17, // don't change this
        atk: function(p) { return 0.5; }
    },

    'Attack reduction (70%)': {
        description: 'ATK of all units reduced by 70%',
        thumb: 765,
        id: 18, // don't change this
        atk: function(p) { return 0.3; }
    },

    'Kuma': {
        description: 'Damage of STR and DEX characters nullified',
        thumb: 836,
        id: 19,  // don't change this
        atk: function(p) { return p.type == 'STR' || p.type == 'DEX' ? 0 : 1; }
    },

    'Shu (Expert)': {
        description: 'Attack of 참격 units reduced by 50%',
        thumb: 773,
        id: 20, // don't change this
        atk: function(p) { return p.class.has("참격") ? 0.5 : 1; }
    },

    'Shu (Master)': {
        description: 'Attack of 참격 units reduced by 70%',
        thumb: 773,
        id: 21, // don't change this
        atk: function(p) { return p.class.has("참격") ? 0.3 : 1; }
    },

    'Attack reduction (20%)': {
        description: 'ATK of all units reduced by 20%',
        thumb: 567,
        id: 22, // don't change this
        atk: function(p) { return 0.8; }
    },

    'Hit barrier (26 hits)': {
        description: 'Nullifies the first 26 hits in the chain',
        thumb: 375,
        id: 23, // don't change this
        comboShield: 26
    },

    'There\'s the G!': {
        description: 'Activates [G] orb support even when Lao-G is not in the team',
        thumb: 880,
        id: 24, // don't change this
        gOrbsEnabled: true
    },
    
    'Colosseum Franky': {
        description: 'Activates [G] orb Support, boosts Orbs by 1.5x',
        thumb: 560,
        id: 25, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 10/15 : 1); },
        gOrbsEnabled: true
    },

    'Colosseum Killer': {
        description: 'ATK of all units reduced by 95%',
        thumb: 1043,
        id: 26, // don't change this
        atk: function(p) { return 0.05; }
    },
    
    'Colosseum Kid': {
        description: 'Perfect hit barrier (2 hits)',
        thumb: 966,
        id: 27,
        comboShield: 2,
        comboType: 'Perfect'
    },
    
    'Colosseum Fukuro': {
        description: 'Perfect hit barrier (3 hits)',
        thumb: 758,
        id: 28,
        comboShield: 3,
        comboType: 'Perfect'
    },
    
    'Colosseum Cricket': {
        description: 'Fixed threshold barrier (200,000)',
        thumb: 428,
        id: 29,
        barrierThreshold: 200000,
        barrierReduction: 0.99
    },
    
    'Sabo Raid Boss': {
        description: 'Reduces Chain By Half',
        thumb: 1047,
        id: 30,
        chainModifier: function(p) { return 0.5; }
    },
    
    'Pirate Ship Competition! \"Dead End\" Opens!': {
        description: 'STR/DEX/QCK ATK 1.6x and HP 0.1x. INT/PSY ATK 0.2x and HP 2x',
        thumb: null,
        id: 31,
        atk: function(p) { console.log(p); return (p.type == "STR" || p.type == "DEX" || p.type == "QCK") ? 1.6 : 0.2; },
        hp: function(p) { return (p.type == "STR" || p.type == "DEX" || p.type == "QCK") ? 0.1 : 2.0; }
        
    }

};
