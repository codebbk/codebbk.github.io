window.ships = [

    // Do NOT change the order of the ships
    
    { // 0
        name: '작은배',
        thumb: 'ship_0001_c.png',
        description: '파티의 체력을 X1.3, 선장의 회복을 120 증가',
        hp: function(p) {
            return p.boatLevel < 6  ? 1.0  :
                   p.boatLevel < 10 ? 1.1 :
                                      1.3 ;
        },
        rcvStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 30, 40, 50, 60, 70, 80, 90, 100, 110, 120 ][p.boatLevel - 1];
        }
    },

    { // 1
        name: '고잉 메리호',
        thumb: 'ship_0002_c.png',
        description: '파티의 공격력X1.5, 선장의 회복을 300증가',
        hpStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 100, 130, 150, 170, 190, 210, 230, 250, 270, 300 ][p.boatLevel - 1];
        },
        atk: function(p) {
            return p.boatLevel < 6  ? 1.0 :
                   p.boatLevel < 10 ? 1.2 :
                                      1.5 ;
        }
    },

    { // 2
        name: '해군선',
        thumb: 'ship_0003_c.png',
        description: '파티의 체력X1.5, 사격유형 캐릭터의 공격력 100증가',
        atkStatic: function(p) {
            return !p.unit.class.has('사격') ? 0 :
                [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ][p.boatLevel -1];
        },
        hp: function(p) {
            return p.boatLevel < 5  ? 1.0 :
                   p.boatLevel < 10 ? 1.2 :
                                      1.5 ;
        }
    },

    { // 3
        name: '발라티에',
        thumb: 'ship_0004_c.png',
        description: '선장의 체력을 2000증가',
        hpStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 2000 ][p.boatLevel - 1];
        }
    },

    { // 4
        name: '관선',
        thumb: 'ship_0005_c.png',
        description: '참격유형 캐릭터의 공격과 체력 X1.5 , 선장의 회복력 700 감소',
        atk: function(p) {
            return !p.unit.class.has('참격') ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('참격') ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        rcvStatic: function(p) {
            return p.slot != 1 ? 0 : -700;
        }
    },

    { // 5
        name: 'Miss 러브덕 호',
        thumb: 'ship_0006_c.png',
        description: '받는 데미지 10% 감소, 타격유형 캐릭터의 공격 100증가',
        atkStatic: function(p) {
            return !p.unit.class.has('타격') ? 0 : [ 0, 0, 0, 0, 0, 0, 50, 50, 50, 100 ][p.boatLevel -1];
        }
    },

    { // 6
        name: '고잉 메리호 비행모델',
        thumb: 'ship_0007_c.png',
        description: '일당의 공격력 1.2배 증가, 턴 종료 후 체력을 350 회복한다.',
        atk: function(p) {
            return p.boatLevel < 7 ? 1 : [ 1.1, 1.1, 1.1, 1.2 ][p.boatLevel - 7];
        },
        heal: function(p) {
            return [ 50, 100, 125, 150, 175, 200, 250, 275, 300, 350 ][p.boatLevel - 1];
        }
    },

    { // 7
        name: '모비딕',
        thumb: 'ship_0008_c1.png',
        description: '일당의 공격력 1.5배 증가, 체력 1.4배 증가, 전투 사작시 체력이 50% 상태로 된다.',
        atk: function(p) {
            return [ 1.2, 1.2, 1.25, 1.3, 1.3, 1.35, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return [ 1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.25, 1.3, 1.4 ][p.boatLevel - 1];
        }
    },

    { // 8
        name: '빅 탑',
        thumb: 'ship_0009_c1.png',
        description: '코스트 20이하 캐릭터의 공격력이 1.5배 증가,  4성 이하 캐릭터의 체력이 1.4배증가',
        atk: function(p) {
            var matching = p.unit.cost <= 15 || (p.unit.cost <= 20 && p.boatLevel >= 6);
            return matching ? [ 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.stars <= 4 ? [ 1.1, 1.2, 1.3, 1.3 ,1.3, 1.3, 1.3, 1.4, 1.4, 1.4 ][p.boatLevel - 1] : 1;
        }
    },

    { // 9
        name: '베잔 블랙',
        thumb: 'ship_0010_c1.png',
        description: '전투 시작시 스킬 1턴 단축, 속 속성 공격력 1.4배, 체력 1.3배 증가',
        atk: function(p) {
            return p.unit.type != '속도' ? 1 : [ 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.25, 1.3, 1.3, 1.4 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return p.unit.type != '속도' ? 1 : [ 1, 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.3, 1.3 ][p.boatLevel - 1];
        }
    },

    { // 10
        name: '아오키지의 자전거',
        thumb: null,
        description: '타격타입의 공격력과 체력 1.5배 증가, [고기]슬롯 출현률 현저히 감소',
        atk: function(p) {
            return !p.unit.class.has('타격') ? 1 :
                [ 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('타격') ? 1 :
                [ 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        }
    },

    { // 11
        name: '에이스의 스트라이커',
        thumb: null,
        description: '사격타입의 공격력 1.5배, 체력 1.3배 증가, 전투 시작전 사격타입 스킬 1턴 단축',
        atk: function(p) {
            return !p.unit.class.has('사격') ? 1 :
                [ 1.2, 1.2, 1.2, 1.25, 1.25, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('사격') ? 1 :
                [ 1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.25, 1.25, 1.3, 1.3 ][p.boatLevel - 1];
        }
    },

    { // 12
        name: '드레드노트 샤벨',
        thumb: 'ship_0014_c1.png',
        description: '일당의 체력 1.5배 증가, 턴 종료 후 무속성 데미지 5,000',
        hp: function(p) {
            return [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.5][p.boatLevel - 1];
        }
    },

    { // 13
        name: '사우전드 써니호',
        thumb: 'ship_0013_c.png',
        description: '일당의 공격력 1.5배, 필살기: 적 전체에 50,000의 무속성 데미지 (쿨타임: 15 턴)',
        atk: function(p) {
            return [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.5 ][p.boatLevel - 1];
        }
    },
    
    { //14
        name: '쿠자 해적선',
        thumb: null,
        description: '자유타입의 공격력 1.5배, 체력 1.35배 증가, 자유타입외 체력 99% 감소. 필살기: 체력 6,500 회복 (쿨타임: 15 턴).',
        atk: function(p) {
            return !p.unit.class.has('자유') ? 1 :
            [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('자유') ? 0.01 :
                [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.35 ][p.boatLevel - 1];
        }
    },
    
    { //15
        name: '방주 맥심',
        thumb: null,
        description: '속 속성, 심 속성 공격력 1.5배, 체력 1.2배 증가. 필살기: 적 전체에 56,560의 고정 데미지 (쿨타임: 17 턴)',
        atk: function(p) {
            return p.unit.type == "마음" || p.unit.type == "속도" ? [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "마음" || p.unit.type == "속도" ? [ 1, 1, 1, 1, 1, 1.1, 1.1, 1.1, 1.1, 1.2 ][p.boatLevel - 1] : 1;
        }
    },
    
    { // 16
        name: '레드 포스',
        thumb: null,
        description: '박식 타입의 공격력 1.5배, 체력 1.35배 증가 , 자슬롯 출현율 증가.',
        atk: function(p) {
            return  !p.unit.class.has('박식') ? 1 : [ 1.0, 1.2, 1.2, 1.2, 1.25, 1.3, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('박식') ? 1 : [ 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.35 ][p.boatLevel - 1];
        }
    },
    
    { // 17
        name: '2주년 사우전드 써니호',
        thumb: null,
        description: '일당의 공격력 1.2배.',
        atk: function(p) { return 1.2; },
    }, 
    {
        name: '태양 해적단 호',
        thumb: null,
        description: '팀에 격투타입 캐릭터가 많을수록 체력, 공격력 각각 최대 1.5배증가 (격투타입 6명팀 기준). 격투타입이 아닐시 체력,공격력 격감(약95%). ',
        atk: function(p) {
            return !p.unit.class.has('격투') ? .05 :
                [ 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.45, 1.45, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('격투') ? .05 :
                [ 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.45, 1.45, 1.5 ][p.boatLevel - 1];
        }
    },
];
