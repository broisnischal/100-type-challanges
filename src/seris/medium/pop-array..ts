type Pop<T extends unknown[]> = T extends [...infer _, unknown] ? _ : [];