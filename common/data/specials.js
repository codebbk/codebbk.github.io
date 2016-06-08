window.specials = {
	18: {
		def: function(p) { return 0.5; }
	},
	24: {
		def: function(p) { return 0.5; }
	},
	34: {
		def: function(p) { return 0; }
	},
	127: {
		def: function(p) { return 0.5; }
	},
	137: {
		def: function(p) { return 0.5; }
	},
	148: {
		def: function(p) { return 0.5; }
	},
	158: {
		def: function(p) { return 0.5; }
	},
	206: {
		def: function(p) { return 0.5; }
	},
	209: {
		atk: function(p) { return p.unit.type == "지능" ? 1.5 : 1; },
		type: "속성"
	},
	210: {
		atk: function(p) { return p.unit.type == "지능" ? 2 : 1; },
		type: "속성"
	},
	222: {
		atk: function(p) { return p.unit.type == "마음" ? 1.5 : 1; },
		type: "속성"
	},
	223: {
		atk: function(p) { return p.unit.type == "마음" ? 2 : 1; },
		type: "속성"
	},
	263: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	267: {
		def: function(p) { return 0.5; }
	},
	275: {
		def: function(p) { return 0.5; }
	},
	285: {
		def: function(p) { return 0.5; }
	},
	295: {
		def: function(p) { return 0.5; }
	},
	309: {
		def: function(p) { return 0.5; }
	},
	310: {
		def: function(p) { return 0.5; }
	},
	313: {
		atk: function(p) { return p.unit.class.has("타격") ? 1.5 : 1; },
		type: "타입"
	},
	314: {
		atk: function(p) { return p.unit.class.has("타격") ? 1.5 : 1; },
		type: "타입"
	},
	323: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	324: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	352: {
		atk: function(p) { return p.unit.class.has("사격") ? 1.75 : 1; },
		type: "타입"
	},
	353: {
		atk: function(p) { return p.unit.class.has("사격") ? 1.75 : 1; },
		type: "타입"
	},
	382: {
		def: function(p) { return 0.5; }
	},
	385: {
		atk: function(p) { return p.unit.class.has("격투") ? 1.25 : 1; },
		type: "타입"
	},
	386: {
		atk: function(p) { return p.unit.class.has("격투") ? 1.25 : 1; },
		type: "타입"
	},
	391: {
		def: function(p) { return 0.2; }
	},
	392: {
		def: function(p) { return 0.2; }
	},
	395: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.25); }
	},
	396: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.25); }
	},
	399: {
		atk: function(p) { return p.unit.type == "기술" ? 1.5 : 1; },
		type: "속성"
	},
	400: {
		atk: function(p) { return p.unit.type == "기술" ? 1.5 : 1; },
		type: "속성"
	},
	401: {
		atk: function(p) { return p.unit.class.has("참격") ? 1.25 : 1; },
		type: "타입"
	},
	402: {
		atk: function(p) { return p.unit.class.has("참격") ? 1.25 : 1; },
		type: "타입"
	},
	404: {
		rcv: function(p) { return 2; }
	},
	405: {
		rcv: function(p) { return 2; }
	},
	406: {
		atk: function(p) { return 1.2; },
		type: "속성"
	},
	417: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 2); }
	},
	418: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 2); }
	},
	419: {
		def: function(p) { return 0.5; }
	},
	423: {
		def: function(p) { return 0.5; }
	},
	424: {
		def: function(p) { return 0.5; }
	},
	426: {
		atk: function(p) { return p.unit.type == "힘" ? 1.05 : 1; },
		type: "속성"
	},
	429: {
		def: function(p) { return 0.5; }
	},
	430: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	431: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	434: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.25); }
	},
	450: {
		atk: function(p) { return p.unit.class.has("격투") ? 1.5 : 1; },
		type: "타입"
	},
	451: {
		atk: function(p) { return p.unit.class.has("격투") ? 1.5 : 1; },
		type: "타입"
	},
	454: {
		atk: function(p) { return p.unit.type == "힘" ? 1.5 : 1; },
		type: "속성"
	},
	455: {
		atk: function(p) { return p.unit.type == "힘" ? 1.5 : 1; },
		type: "속성"
	},
	458: {
		atk: function(p) { return 1.5; },
		type: "속성"
	},
	459: {
		atk: function(p) { return 1.5; },
		type: "속성"
	},
	461: {
		atk: function(p) { return p.unit.class.has("격투") ? 1.25 : 1; },
		type: "타입"
	},
	462: {
		atk: function(p) { return p.unit.class.has("격투") ? 1.25 : 1; },
		type: "타입"
	},
	465: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.25); }
	},
	468: {
		rcv: function(p) { return 1.5; }
	},
	470: {
		rcv: function(p) { return 1.5; }
	},
	487: {
		atk: function(p) { return p.unit.type == "힘" ? 1.2 : 1; },
		type: "속성"
	},
	488: {
		atk: function(p) { return p.unit.type == "속도" ? 1.2 : 1; },
		type: "속성"
	},
	489: {
		atk: function(p) { return p.unit.type == "기술" ? 1.2 : 1; },
		type: "속성"
	},
	490: {
		atk: function(p) { return p.unit.type == "힘" ? 1.2 : 1; },
		type: "속성"
	},
	491: {
		atk: function(p) { return p.unit.type == "속도" ? 1.2 : 1; },
		type: "속성"
	},
	492: {
		atk: function(p) { return p.unit.type == "기술" ? 1.2 : 1; },
		type: "속성"
	},
	505: {
		atk: function(p) { return p.unit.type == "속도" ? 1.25 : 1; },
		type: "속성"
	},
	506: {
		atk: function(p) { return p.unit.type == "속도" ? 1.25 : 1; },
		type: "속성"
	},
	509: {
		atk: function(p) { return p.unit.class.has("타격") ? 1.5 : 1; },
		type: "타입"
	},
	510: {
		atk: function(p) { return p.unit.class.has("타격") ? 1.5 : 1; },
		type: "타입"
	},
	511: {
		atk: function(p) { return p.unit.class.has("참격") ? 1.25 : 1; },
		type: "타입"
	},
	514: {
		def: function(p) { return 0.5; },
		atk: function(p) { return p.unit.type == "지능" ? 1.5 : 1; },
		type: "속성"
	},
	517: {
		atk: function(p) { return 1.05; },
		type: "속성"
	},
	518: {
		atk: function(p) { return 1.05; },
		type: "속성"
	},
	519: {
		atk: function(p) { return p.unit.type == "힘" ? 2 : 1; },
		type: "속성"
	},
	520: {
		atk: function(p) { return p.unit.type == "힘" ? 2 : 1; },
		type: "속성"
	},
	529: {
		def: function(p) { return 0; }
	},
	530: {
		def: function(p) { return 0; }
	},
	533: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	534: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	542: {
		rcv: function(p) { return 2; }
	},
	545: {
		atk: function(p) { return p.unit.type == "마음" ? 1.5 : 1; },
		type: "속성"
	},
	546: {
		atk: function(p) { return p.unit.type == "마음" ? 1.5 : 1; },
		type: "속성"
	},
	549: {
		atk: function(p) { return p.defenseDown ? 1.3 : 1; },
		type: "condition"
	},
	550: {
		atk: function(p) { return p.defenseDown ? 1.3 : 1; },
		type: "condition"
	},
	559: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	560: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	568: {
		def: function(p) { return 0.5; }
	},
	569: {
		def: function(p) { return 0.5; }
	},
	572: {
		atk: function(p) { return p.unit.class.has("격투") ? 2 : 1; },
		type: "타입",
		onActivation: function(p) { p.tdata.lock = Math.max(1, p.tdata.lock); },
		onDeactivation: function(p) { if (p.tdata.lock == 1) p.tdata.lock = 0; }
	},
	574: {
		atk: function(p) { return p.unit.class.has("타격") ? 1.75 : 1; },
		type: "타입"
	},
	575: {
		atk: function(p) { return p.unit.class.has("타격") ? 1.75 : 1; },
		type: "타입"
	},
	576: {
		rcv: function(p) { return 1.5; }
	},
	582: {
		atk: function(p) { return p.unit.type == "속도" ? 1.5 : 1; },
		type: "속성"
	},
	589: {
		atk: function(p) { return p.unit.class.has("참격") ? 1.5 : 1; },
		type: "타입"
	},
	590: {
		atk: function(p) { return p.unit.class.has("참격") ? 1.5 : 1; },
		type: "타입"
	},
	596: {
		def: function(p) { return 0.5; }
	},
	597: {
		def: function(p) { return 0.5; }
	},
	600: {
		atk: function(p) { return p.unit.type == "마음" ? 1.3 : 1; },
		type: "속성"
	},
	601: {
		atk: function(p) { return p.unit.type == "마음" ? 1.3 : 1; },
		type: "속성"
	},
	602: {
		atk: function(p) { return p.unit.type == "속도" ? 2 : 1; },
		type: "속성"
	},
	603: {
		atk: function(p) { return p.unit.type == "속도" ? 2 : 1; },
		type: "속성"
	},
	612: {
		atkStatic: function(p) { return 45; },
		rcvStatic: function(p) { return 45; },
		type: "속성"
	},
	613: {
		atkStatic: function(p) { return 45; },
		rcvStatic: function(p) { return 45; },
		type: "속성"
	},
	614: {
		def: function(p) { return 0.5; }
	},
	617: {
		atk: function(p) { return p.unit.class.has("사격") ? 1.2 : 1; },
		type: "타입"
	},
	622: {
		rcvStatic: function(p) { return 100; },
		type: "속성"
	},
	632: {
		def: function(p) { return 0.5; }
	},
	633: {
		def: function(p) { return 0.5; }
	},
	634: {
		atk: function(p) { return p.unit.type == "속도" || p.unit.type == "마음" ? 1.2 : 1; },
		type: "속성"
	},
	635: {
		atk: function(p) { return p.unit.type == "속도" || p.unit.type == "마음" ? 1.2 : 1; },
		type: "속성"
	},
	637: {
		atk: function(p) { return 1.3; },
		type: "condition",
		warning: "Selected special (%name%) assumes that the enemy has a defense buff active."
	},
	642: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.75); }
	},
	643: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.75); }
	},
	644: {
		atk: function(p) { return 1.2; },
		type: "condition",
		warning: "Selected special (%name%) assumes that the enemy has been delayed."
	},
	645: {
		atk: function(p) { return 1.2; },
		type: "condition",
		warning: "Selected special (%name%) assumes that the enemy has been delayed."
	},
	648: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	649: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	650: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	651: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	655: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.25); }
	},
	656: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.25); }
	},
	660: {
		def: function(p) { return 0.5; }
	},
	661: {
		def: function(p) { return 0.5; }
	},
	665: {
		atk: function(p) { return p.defenseDown ? 1.3 : 1; },
		type: "condition"
	},
	666: {
		atk: function(p) { return p.defenseDown ? 1.3 : 1; },
		type: "condition"
	},
	668: {
		atk: function(p) { return !p.unit.class.has('자유') ? 1 : window.specials[668].multiplier; },
		type: "타입",
		onActivation: function(p) {
			var n = (window.specials[668].multiplier == 1.5 ? 1 : 0);
			window.specials[668].multiplier = [1.5, 2][n];
			p.scope.notify({
				text: 'Using the ' + [1.5, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.5][n] + 'x multiplier, disable and re-enable this special',
				name: '667warning'
			});
		}
	},
	669: {
		atk: function(p) { return !p.unit.class.has('자유') ? 1 : window.specials[669].multiplier; },
		type: "타입",
		onActivation: function(p) {
			var n = (window.specials[669].multiplier == 1.5 ? 1 : 0);
			window.specials[669].multiplier = [1.5, 2][n];
			p.scope.notify({
				text: 'Using the ' + [1.5, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.5][n] + 'x multiplier, disable and re-enable this special',
				name: '668warning'
			});
		}
	},
	670: {
		atk: function(p) { return p.unit.class.has("격투") ? 1.75 : 1; },
		type: "타입"
	},
	671: {
		atk: function(p) { return p.unit.class.has("격투") ? 1.75 : 1; },
		type: "타입"
	},
	680: {
		atk: function(p) { return p.unit.type == "기술" ? 1.25 : 1; },
		rcv: function(p) { return p.unit.type == "기술" ? 1.25 : 1; },
		type: "속성"
	},
	681: {
		atk: function(p) { return p.unit.type == "기술" ? 1.25 : 1; },
		rcv: function(p) { return p.unit.type == "기술" ? 1.25 : 1; },
		type: "속성"
	},
	687: {
		atk: function(p) { return p.unit.class.has("자유") ? 1.3 : 1; },
		type: "타입"
	},
	688: {
		atk: function(p) { return p.unit.class.has("자유") ? 1.3 : 1; },
		type: "타입"
	},
	689: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	690: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	710: {
		atk: function(p) { return p.unit.class.has("사격") ? 1.25 : 1; },
		type: "타입"
	},
	711: {
		atk: function(p) { return p.unit.class.has("사격") ? 1.25 : 1; },
		type: "타입"
	},
	712: {
		atk: function(p) { return p.slot < 2 ? 1.5 : 1; },
		type: "타입"
	},
	713: {
		atk: function(p) { return p.slot < 2 ? 1.5 : 1; },
		type: "타입"
	},
	715: {
		atk: function(p) { return p.unit.class.has("자유") ? 1.5 : 1; },
		type: "타입"
	},
	716: {
		atk: function(p) { return p.unit.class.has("자유") ? 1.5 : 1; },
		type: "타입"
	},
	719: {
		atk: function(p) { return p.unit.class.has("박식") ? window.specials[719].multiplier : 1; },
		type: "타입",
		onActivation: function(p) {
			var n = (p.percHP <= 30 ? 2 : 1.5);
			window.specials[719].multiplier = n;
			p.scope.notify({
				text: 'HP ' + (n == 2 ? 'below' : 'above') + ' 30%, using the ' + n + 'x multiplier.',
				name: '719warning'
			});
		}
	},
	720: {
		atk: function(p) { return p.unit.class.has("박식") ? window.specials[720].multiplier : 1; },
		type: "타입",
		onActivation: function(p) {
			var n = (p.percHP <= 30 ? 2 : 1.5);
			window.specials[720].multiplier = n;
			p.scope.notify({
				text: 'HP ' + (n == 2 ? 'below' : 'above') + ' 30%, using the ' + n + 'x multiplier.',
				name: '720warning'
			});
		}
	},
	727: {
		def: function(p) { return 0.5; }
	},
	730: {
		atk: function(p) { return p.unit.type == "지능" ? 1.5 : 1; },
		type: "속성"
	},
	731: {
		atk: function(p) { return p.unit.type == "지능" ? 1.5 : 1; },
		type: "속성"
	},
	732: {
		def: function(p) { return 0.5; }
	},
	733: {
		def: function(p) { return 0.5; }
	},
	740: {
		atk: function(p) { return 1.3; },
		type: "condition",
		warning: "Selected special (%name%) assumes that the enemy has a defense buff active."
	},
	741: {
		atk: function(p) { return 1.3; },
		type: "condition",
		warning: "Selected special (%name%) assumes that the enemy has a defense buff active."
	},
	742: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.25); }
	},
	743: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.25); }
	},
	753: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.75); }
	},
	754: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.75); }
	},
	755: {
		atk: function(p) { return p.unit.class.has("강인") ? 1.75 : 1; },
		type: "타입"
	},
	756: {
		atk: function(p) { return p.unit.class.has("강인") ? 1.75 : 1; },
		type: "타입"
	},
	761: {
		atk: function(p) { return 1.2; },
		type: "속성"
	},
	762: {
		atk: function(p) { return p.unit.type == "마음" ? 1.75 : 1; },
		type: "속성"
	},
	770: {
		atk: function(p) { return 1.3; },
		type: "condition",
		warning: "Selected special (%name%) assumes that the enemy has been delayed."
	},
	771: {
		atk: function(p) { return p.unit.class.has("박식") ? 1.75 : 1; },
		type: "속성"
	},
	780: {
		atk: function(p) { return p.slot == p.sourceSlot ? window.specials[780].multiplier : 1; },
		type: "속성",
		onActivation: function(p) {
			var n = (p.percHP <= 20 ? 2 : (p.percHP <= 50 ? 1.75 : 1.5));
			window.specials[780].multiplier = n;
			p.scope.notify({
				text: 'Using the ' + n + 'x multiplier.',
				name: '780warning'
			});
		}
	},
	781: {
		atk: function(p) { return p.slot == p.sourceSlot ? window.specials[781].multiplier : 1; },
		type: "속성",
		onActivation: function(p) {
			var n = (p.percHP <= 20 ? 2 : (p.percHP <= 50 ? 1.75 : 1.5));
			window.specials[781].multiplier = n;
			p.scope.notify({
				text: 'Using the ' + n + 'x multiplier.',
				name: '781warning'
			});
		}
	},
	788: {
		atk: function(p) { return p.unit.class.has("참격") ? 1.75 : 1; },
		type: "타입"
	},
	789: {
		atk: function(p) { return p.unit.class.has("참격") ? 1.75 : 1; },
		type: "타입"
	},
	790: {
		atk: function(p) { return /힘|기술|속도/.test(p.unit.type) ? 1.2 : 1; },
		type: "속성"
	},
	791: {
		atk: function(p) { return /힘|기술|속도/.test(p.unit.type) ? 1.2 : 1; },
		type: "속성"
	},
	796: {
		atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
		type: "속성"
	},
	797: {
		atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
		type: "속성"
	},
	798: {
		atk: function(p) { return p.unit.class.has("격투") ? 1.75 : 1; },
		type: "타입"
	},
	803: {
		atk: function(p) { return 1.1; },
		type: "속성"
	},
	804: {
		atk: function(p) { return 1.1; },
		type: "속성"
	},
	805: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.75); }
	},
	806: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.75); }
	},
	807: {
		atk: function(p) { return p.defenseDown ? 1.3 : 1; },
		type: "condition"
	},
	808: {
		atk: function(p) { return p.defenseDown ? 1.3 : 1; },
		type: "condition"
	},
	809: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); },
		def: function(p) { return 0.2; }
	},
	810: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); },
		def: function(p) { return 0.2; }
	},
	813: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.25); }
	},
	822: {
		rcvStatic: function(p) { return 100; },
		type: "속성"
	},
	825: {
		atkStatic: function(p) { return 200; },
		type: "속성"
	},
	826: {
		atk: function(p) { return 0.2; },
		type: "속성"
	},
	827: {
		atk: function(p) { return 1.05; },
		type: "condition",
		warning: "Selected special (%name%) assumes that the enemy has been poisoned."
	},
    828: {
        atk: function(p) { return p.unit.class.has("참격") || p.unit.class.has("야심") ? window.specials[828].multiplier : 1; },
		type: "타입",
		onActivation: function(p) {
			var n = (p.percHP < 20 ? 1.75 : 1);
			window.specials[828].multiplier = n;
			p.scope.notify({
				text: 'HP ' + (n == 1.75 ? 'below' : 'above') + ' 20%, using the ' + n + 'x multiplier.',
				name: '828warning'
			});
		}  
    },
    829: {
        atk: function(p) { return p.unit.class.has("참격") || p.unit.class.has("야심") ? window.specials[829].multiplier : 1; },
		type: "타입",
		onActivation: function(p) {
			var n = (p.percHP < 20 ? 1.75 : 1);
			window.specials[829].multiplier = n;
			p.scope.notify({
				text: 'HP ' + (n == 1.75 ? 'below' : 'above') + ' 20%, using the ' + n + 'x multiplier.',
				name: '829warning'
			});
		}
    },
	832: {
		atk: function(p) { return p.unit.class.has("자유") ? 1.5 : 1; },
		type: "타입"
	},
	833: {
		atk: function(p) { return p.unit.class.has("자유") ? 1.5 : 1; },
		type: "타입"
	},
	835: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.75); }
	},
	836: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.75); }
	},
	837: {
		atk: function(p) { return p.unit.class.has("야심") ? 1.75 : 1; },
		type: "타입"
	},
	838: {
		atk: function(p) { return p.unit.class.has("야심") ? 1.75 : 1; },
		type: "타입"
	},
	839: {
		atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
		type: "속성"
	},
	840: {
		atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
		type: "속성"
	},
	841: {
		atk: function(p) { return 1.25; },
		type: "condition",
		warning: "Selected special (%name%) assumes that the enemy has been delayed."
	},
	842: {
		atk: function(p) { return 1.25; },
		type: "condition",
		warning: "Selected special (%name%) assumes that the enemy has been delayed."
	},
	843: {
		atk: function(p) {
			if (window.specials[843].first) return p.unit.class.has("사격") ? 1.5 : 1;
			else return p.unit.class.has("사격") || p.unit.class.has("참격") || p.unit.class.has("타격") ? 1.5 : 1;
		},
		type: "타입",
		onActivation: function(p) {
			window.specials[843].first = !window.specials[843].first;
			p.scope.notify({
				text: (window.specials[843].first ?
					'Boosting Shooters. To switch to the second multiplier, disable and re-enable this special' :
					'Boosting Shooters, Slashers and Strikers. To switch to the first multiplier, disable and re-enable this special'),
				name: '843warning'
			});
		}
	},
	844: {
		atk: function(p) {
			if (window.specials[844].first) return p.unit.class.has("사격") ? 1.5 : 1;
			else return p.unit.class.has("사격") || p.unit.class.has("참격") || p.unit.class.has("타격") ? 1.5 : 1;
		},
		type: "타입",
		onActivation: function(p) {
			window.specials[844].first = !window.specials[844].first;
			p.scope.notify({
				text: (window.specials[844].first ?
					'Boosting Shooters. To switch to the second multiplier, disable and re-enable this special' :
					'Boosting Shooters, Slashers and Strikers. To switch to the first multiplier, disable and re-enable this special'),
				name: '844warning'
			});
		}
	},
	847: {
		atk: function(p) { return 1.05; },
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.15); },
		type: "타입"
	},
	848: {
		atk: function(p) { return 1.05; },
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.15); },
		type: "타입"
	},
	849: {
		def: function() { return 0.5; }
	},
	853: {
		atk: function(p) { return p.unit.class.has("강인") || p.unit.class.has("격투") ? 1.2 : 1; },
		type: "타입"
	},
	857: {
		rcv: function(p) { return p.unit.type == 'PSY' ? 1.5 : 1; },
		type: "속성"
	},
	858: {
		rcv: function(p) { return p.unit.type == 'PSY' ? 1.5 : 1; },
		type: "속성"
	},
	861: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	862: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
	},
	863: {
		def: function(p) { return 0.5; }
	},
	864: {
		chain: function(p) { return 2.5; },
		chainLimiter: function(p) { return p.chainPosition > 0 ? 2.5 : 1.0; }
	},
	865: {
		chain: function(p) { return 2.5; },
		chainLimiter: function(p) { return p.chainPosition > 0 ? 2.5 : 1.0; }
	},
	866: {
		atk: function(p) {
			return p.unit.class.has("참격") || p.unit.class.has("박식") ? 1.3 : 1;
		},
		type: "타입"
	},
	869: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 2.0); }
	},
	870: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 2.0); }
	},
	873: {
		orb: function(p) {
			if (window.specials[873].first) return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5);
			else return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.75);
		},
		type: "타입",
		onActivation: function(p) {
			window.specials[873].first = !window.specials[873].first;
			p.scope.notify({
				text: (window.specials[873].first ?
					'Activating the first stage. To switch to the second stage, disable and re-enable this special' :
					'Activating the second stage. To switch to the first stage, disable and re-enable this special'),
				name: '873warning'
			});
		}
	},
	874: {
		orb: function(p) {
			if (window.specials[874].first) return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5);
			else return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.75);
		},
		type: "타입",
		onActivation: function(p) {
			window.specials[874].first = !window.specials[874].first;
			p.scope.notify({
				text: (window.specials[874].first ?
					'Activating the first stage. To switch to the second stage, disable and re-enable this special' :
					'Activating the second stage. To switch to the first stage, disable and re-enable this special'),
				name: '874warning'
			});
		}
	},
	881: {
		atk: function(p) {
			return p.unit.class.has("사격") || p.unit.class.has("자유") ? 1.75 : 1;
		},
		rcv: function(p) { return 0.1; },
		type: "타입"
	},
	882: {
		atk: function(p) {
			return p.unit.class.has("사격") || p.unit.class.has("자유") ? 1.75 : 1;
		},
		rcv: function(p) { return 0.1; },
		type: "타입"
	},
	883: {
		atk: function(p) { return !p.unit.class.has('강인') ? 1 : window.specials[883].multiplier; },
		type: "타입",
		onActivation: function(p) {
			var n = (window.specials[883].multiplier == 1.5 ? 1 : 0);
			window.specials[883].multiplier = [1.5, 2][n];
			p.scope.notify({
				text: 'Using the ' + [1.5, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.5][n] + 'x multiplier, disable and re-enable this special',
				name: '883warning'
			});
		}
	},
	884: {
		atk: function(p) { return !p.unit.class.has('강인') ? 1 : window.specials[884].multiplier; },
		type: "타입",
		onActivation: function(p) {
			var n = (window.specials[884].multiplier == 1.5 ? 1 : 0);
			window.specials[884].multiplier = [1.5, 2][n];
			p.scope.notify({
				text: 'Using the ' + [1.5, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.5][n] + 'x multiplier, disable and re-enable this special',
				name: '884warning'
			});
		}
	},
	885: {
		atk: function(p) { return p.unit.class.has("격투") ? 1.5 : 1; },
		type: "타입"
	},
	886: {
		atk: function(p) { return p.unit.class.has("참격") ? 1.5 : 1; },
		type: "타입"
	},
	887: {
		def: function(p) { return 0.2; }
	},
	891: {
		atk: function(p) { return p.unit.class.has("강인") ? 1.25 : 1; },
		type: "타입"
	},
	902: {
		atk: function(p) { return !p.unit.class.has('강인') ? 1 : window.specials[902].multiplier; },
		type: "타입",
		onActivation: function(p) {
			var n = (window.specials[902].multiplier == 1.5 ? 1 : 0);
			window.specials[902].multiplier = [1.5, 2][n];
			p.scope.notify({
				text: 'Using the ' + [1.5, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.5][n] + 'x multiplier, disable and re-enable this special',
				name: '902warning'
			});
		}
	},
	903: {
		atk: function(p) { return !p.unit.class.has('강인') ? 1 : window.specials[903].multiplier; },
		type: "타입",
		onActivation: function(p) {
			var n = (window.specials[903].multiplier == 1.5 ? 1 : 0);
			window.specials[903].multiplier = [1.5, 2][n];
			p.scope.notify({
				text: 'Using the ' + [1.5, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.5][n] + 'x multiplier, disable and re-enable this special',
				name: '902warning'
			});
		}
	},
	905: {
		atk: function(p) {
			if (!window.specials[905].stage) return p.slot == p.sourceSlot ? 1.5 : 1;
			if (window.specials[905].stage == 1) return p.unit.class.has("참격") ? 1.5 : 1;
			if (window.specials[905].stage == 2) return p.unit.class.has("참격") ? 1.75 : 1;
		},
		type: "타입",
		stage: -1,
		onActivation: function(p) {
			window.specials[905].stage = (window.specials[905].stage + 1) % 3;
			p.scope.notify({
				text: 'Activating stage #' + (window.specials[905].stage + 1) + '. To move onto the next stage, disable and re-enable this special.',
				name: '905warning'
			});
		}
	},
	906: {
		atk: function(p) {
			if (!window.specials[906].stage) return p.slot == p.sourceSlot ? 1.5 : 1;
			if (window.specials[906].stage == 1) return p.unit.class.has("참격") ? 1.5 : 1;
			if (window.specials[906].stage == 2) return p.unit.class.has("참격") ? 1.75 : 1;
		},
		type: "타입",
		stage: -1,
		onActivation: function(p) {
			window.specials[906].stage = (window.specials[906].stage + 1) % 3;
			p.scope.notify({
				text: 'Activating stage #' + (window.specials[906].stage + 1) + '. To move onto the next stage, disable and re-enable this special.',
				name: '906warning'
			});
		}
	},
	909: {
		atk: function(p) { return p.unit.type == "마음" ? 1.5 : 1; },
		type: "속성"
	},
	910: {
		atk: function(p) { return p.unit.type == "마음" ? 1.5 : 1; },
		type: "속성"
	},
	911: {
		atk: function(p) {
			if (!window.specials[911].stage) return p.unit.class.has("강인") ? 1.2 : 1;
			if (window.specials[911].stage == 1) return p.unit.class.has("강인") ? 2 : 1;
		},
		type: "타입",
		stage: -1,
		onActivation: function(p) {
			window.specials[911].stage = (window.specials[911].stage + 1) % 2;
			p.scope.notify({
				text: 'Activating stage #' + (window.specials[911].stage + 1) + '. To move onto the next stage, disable and re-enable this special.',
				name: '911warning'
			});
		}
	},
	912: {
		atk: function(p) {
			if (!window.specials[912].stage) return p.unit.class.has("강인") ? 1.2 : 1;
			if (window.specials[912].stage == 1) return p.unit.class.has("강인") ? 2 : 1;
		},
		type: "타입",
		stage: -1,
		onActivation: function(p) {
			window.specials[912].stage = (window.specials[912].stage + 1) % 2;
			p.scope.notify({
				text: 'Activating stage #' + (window.specials[912].stage + 1) + '. To move onto the next stage, disable and re-enable this special.',
				name: '912warning'
			});
		}
	},
	915: {
		atk: function(p) { return p.unit.class.has("박식") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("박식") ? 1.5 : 1; },
		type: "타입"
	},
	916: {
		atk: function(p) { return p.unit.class.has("박식") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("박식") ? 1.5 : 1; },
		type: "타입"
	},
    921: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
    },
    922: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
    },
    925: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
		type: "condition"
    },
    926: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
		type: "condition"
    },
	927: {
        atk: function(p) {
			return p.unit.class.has("참격") || p.unit.class.has("야심") ? 1.2 : 1;
		},
		type: "타입"
    },
	928: {
        atk: function(p) { return 1.3; },
		type: "condition",
		warning: "Selected special (%name%) assumes that the enemy has been poisoned."
    },
    929: {
        atk: function(p) { return 1.3; },
		type: "condition",
		warning: "Selected special (%name%) assumes that the enemy has been poisoned."
    },
	940: {
		atk: function(p) { return p.unit.type == "기술" ? 1.75 : 1; },
		type: "속성"
    },
	941: {
		atk: function(p) { return p.unit.type == "기술" ? 1.75 : 1; },
		type: "속성"
    },
	944: {
		atk: function(p) { return p.unit.class.has("야심") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("야심") ? 1.5 : 1; },
		type: "타입"
    },
	945: {
		atk: function(p) { return p.unit.class.has("야심") ? 1.5 : 1; },
		rcv: function(p) { return p.unit.class.has("야심") ? 1.5 : 1; },
		type: "타입"
    },
	947: {
		atk: function(p) { return p.unit.type == "힘" || p.unit.type == "지능" ? 1.3 : 1; },
		type: "속성"
    },
	954: {
		def: function(p) { return 0.2; }		
	},
	955: {
		atk: function(p) { return p.defenseDown ? 1.2 : 1; },
		type: "condition"
	},
	956: {
		atk: function(p) { return p.unit.class.has("강인") ? 1.2 : 1; },
		type: "타입"
	},
	961: {
		orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.25); }
	},
	963: {
		def: function(p) { return 0; }
	},
	964: {
		atk: function(p) { return window.specials[964].multiplier; },
		type: "타입",
		onActivation: function(p) {
			var n = (window.specials[964].multiplier == 1.1 ? 1 : 0);
			window.specials[964].multiplier = [1.1, 1.5][n];
			p.scope.notify({
				text: 'Using the ' + [1.1, 1.5][n] + 'x ATK multiplier. To switch to the ' + [1.5, 1.1][n] + 'x multiplier, disable and re-enable this special',
				name: '965warning'
			});
		}
	},
	965: {
		atk: function(p) { return window.specials[965].multiplier; },
		type: "타입",
		onActivation: function(p) {
			var n = (window.specials[965].multiplier == 1.1 ? 1 : 0);
			window.specials[965].multiplier = [1.1, 1.5][n];
			p.scope.notify({
				text: 'Using the ' + [1.1, 1.5][n] + 'x ATK multiplier. To switch to the ' + [1.5, 1.1][n] + 'x multiplier, disable and re-enable this special',
				name: '965warning'
			});
		}
	},
	975: {
		atk: function(p) { return p.unit.class.has("야심") ? 1.3 : 1; },
		atk: function(p) { return p.unit.class.has("타격") ? 1.3 : 1; },
		type: "타입"
    },
	976: {
		atk: function(p) { return p.unit.class.has("야심") ? 1.3 : 1; },
		atk: function(p) { return p.unit.class.has("타격") ? 1.3 : 1; },
		type: "타입"
    },
    977: {
        chainAddition: function(p) {return 0.5;}
    },
    978: {
        chainAddition: function(p){ return 0.5;}
    },
    981: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
		type: "속성"
    },
	1005: {
		atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
		type: "속성"
	},
	1006: {
		atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
		type: "속성"
	},
	1010: {
		atk: function(p) { return p.slot == p.sourceSlot ? 1.3 : 1; },
		type: "속성"
	},
	1011: {
		atk: function(p) { return p.slot == p.sourceSlot ? 1.3 : 1; },
		type: "속성"
	},
	1013: {
		atk: function(p) { return 1.2; },
		type: "condition",
		warning: "Selected special (%name%) assumes that the enemy has been delayed."
	},
    1015: {
        atk: function(p) { return p.unit.type == "지능" ? 1.5 : 1; },
		type: "속성"
    },
    1016: {
        atk: function(p) { return p.unit.type == "지능" ? 1.5 : 1; },
		type: "속성"
    },
    1017: {
        atk: function(p) { return p.unit.class.has("참격") ? 1.5 : 1},
        type: "타입"
    },
    1018: {
        atk: function(p) { return p.unit.class.has("참격") ? 1.5 : 1},
        type: "타입"
    },
    1023: {
        atk: function(p) { return p.unit.class.has("자유") ? 1.75 : 1},
        type: "타입"
    },
    1024: {
        orb: function(p) {
            if(p.percHP >= 70.0){
                return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.25);
            }else if(p.percHP >= 30.0){
                return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5);
            }else{
                return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.75);
            }
        }
    },
    1025: {
        orb: function(p) {
            if(p.percHP >= 70.0){
                return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.25);
            }else if(p.percHP >= 30.0){
                return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5);
            }else{
                return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.75);
            }
        }
    },
    1028: {
        //TODO
       hit: function(n) { return n > 30 ? 1.75 : 1; } 
    },
    1029: {
        //TODO
       hit: function(n) { return n > 30 ? 1.75 : 1; } 
    },
    1030: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
		type: "속성"
    },
    1031: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
		type: "속성"
    },
    1040: {
        atk: function(p) { return p.percHP < 30.0 ? 1.5 : 1; },
		type: "속성"
    },
    1041: {
        atk: function(p) { return p.percHP < 30.0 ? 1.5 : 1; },
		type: "속성"
    },
    1046: {
        staticMult: function(p) { return 55; }
    },
    1047: {
        staticMult: function(p) { return 55; }
    },
    1055: {
		atk: function(p) { return 1.4; },
		type: "condition",
		warning: "Selected special (%name%) assumes that the enemy has been STRONGLY Poisoned."
	},
    1056: {
		atk: function(p) { return 1.4; },
		type: "condition",
		warning: "Selected special (%name%) assumes that the enemy has been STRONGLY Poisoned."
	},
    1059: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
    },
    1060: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
    },
    1061: {
		chain: function(p) { return 2; },
		chainLimiter: function(p) { return p.chainPosition > 0 ? 2 : 1.0; }
	},
    1063: {
        atk: function(p) { return p.unit.class.has("사격") ? 1.3 : 1},
        type: "타입"
    },
    1065: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.25); }
    },
    1066: {
        chainAddition: function(p){ return 0.1;}
    },
    1067: {
		atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
		type: "속성"
	},
    1071: {
        atk: function(p) { return p.unit.class.has("강인") ? 1.5 : 1},
        type: "타입"
    },
    1072: {
        atk: function(p) { return p.unit.class.has("강인") ? 1.5 : 1},
        type: "타입"
    },
    1080: {
		atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
		type: "속성"
	},
    1081: {
		atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
		type: "속성"
	},
    1082: {
        atk: function(p) {
            if(p.percHP >= 70.0){
                return p.unit.class.has("타격") || p.unit.class.has("격투") ? 1.2 : 1;
            }else if(p.percHP >= 20.0){
                return p.unit.class.has("타격") || p.unit.class.has("격투") ? 1.5 : 1;
            }else{
                return p.unit.class.has("타격") || p.unit.class.has("격투") ? 1.75 : 1;
            }
        }
    },
    1083: {
        atk: function(p) {
            if(p.percHP >= 70.0){
                return p.unit.class.has("타격") || p.unit.class.has("격투") ? 1.2 : 1;
            }else if(p.percHP >= 20.0){
                return p.unit.class.has("타격") || p.unit.class.has("격투") ? 1.5 : 1;
            }else{
                return p.unit.class.has("타격") || p.unit.class.has("격투") ? 1.75 : 1;
            }
        }
    },
    1086: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
    },
    1087: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, 1, 1.5); }
    },
    1088: {
        atk: function(p) { return p.unit.class.has("참격" || "야심") ? 1.5 : 1},
        type: "타입"
    },
    1089: {
        atk: function(p) { return p.unit.class.has("참격" || "야심") ? 1.5 : 1},
        type: "타입"
    }
};
