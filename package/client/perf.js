import { getPerformance, trace } from 'firebase/performance';
import { firebaseApp } from './init';
export function startTrace(name) {
    const perf = getPerformance(firebaseApp);
    const t = trace(perf, name);
    t.start();
    return t;
}
export function stopTrace(t) {
    t.stop();
    return null;
}
// add more from https://modularfirebase.web.app/common-use-cases/performance-monitoring/