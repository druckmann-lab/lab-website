/**
 * AUTO-GENERATED - DO NOT EDIT
 * Run: npm run build:members
 */

// PI
import shaulDruckmann from './pi/shaul-druckmann.js';

// POSTDOC
import taigaAbe from './postdoc/taiga-abe.js';

// PHD
import balintKurgyis from './phd/balint-kurgyis.js';
import benyaminKrasa from './phd/benyamin-krasa.js';
import jiamingLu from './phd/jiaming-lu.js';
import kwonKo from './phd/kwon-ko.js';
import kyunggeunKim from './phd/kyunggeun-kim.js';
import mattBauer from './phd/matt-bauer.js';
import minseungChoi from './phd/minseung-choi.js';

// ALUMNI
import brettLarsen from './alumni/brett-larsen.js';
import byungwooKang from './alumni/byungwoo-kang.js';
import fengChen from './alumni/feng-chen.js';
import guyWilson from './alumni/guy-wilson.js';
import haggaiAgmon from './alumni/haggai-agmon.js';
import johnKochalka from './alumni/john-kochalka.js';
import lydiaHamburg from './alumni/lydia-hamburg.js';
import tylerBenster from './alumni/tyler-benster.js';
import yiLiu from './alumni/yi-liu.js';

export const PI = shaulDruckmann;
export const POSTDOCS = [taigaAbe];
export const GRAD_STUDENTS = [balintKurgyis, benyaminKrasa, jiamingLu, kwonKo, kyunggeunKim, mattBauer, minseungChoi];
export const ALUMNI = [brettLarsen, byungwooKang, fengChen, guyWilson, haggaiAgmon, johnKochalka, lydiaHamburg, tylerBenster, yiLiu];
export const STAFF = [];

// Helpers
const allMembers = [PI, ...POSTDOCS, ...GRAD_STUDENTS, ...STAFF, ...ALUMNI];
export const MEMBERS = Object.fromEntries(allMembers.map(m => [m.id, m]));
export function getMemberById(id) { return MEMBERS[id] || null; }
export function getCurrentMembers() { return [PI, ...POSTDOCS, ...GRAD_STUDENTS, ...STAFF]; }
