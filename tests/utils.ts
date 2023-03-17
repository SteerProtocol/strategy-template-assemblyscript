export const config_payload = `{"percent":5,"poolFee":3000}`;

export const config = `{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Strategy Config",
  "type": "object",
  "parameters": ["OHLC"],
  "properties": {
    "percent": {
      "type": "number",
      "description": "Percent for trailing stop order (must be greater than pool fee)",
      "default": 5.0
  },
    "poolFee": {
      "description": "Pool fee percent for desired Uniswapv3 pool",
      "enum" : [10000, 3000, 500, 100],
      "enumNames": ["1%", "0.3%", "0.05%", "0.01%"]
    }
  },
  "required": ["percent", "poolFee"]
}`;

export const empty = '{"data":[]}';

export const prices2 = [
  {
    open: 2.50463873386213e21,
    high: 2.5046430693437536e21,
    close: 2.5046430693437536e21,
    low: 2.50463873386213e21,
  },
  {
    open: 2.5046441722633493e21,
    high: 2.504653822829505e21,
    close: 2.504653822829505e21,
    low: 2.5046441722633493e21,
  },
  {
    open: 2.5046560286781625e21,
    high: 2.5046687506200826e21,
    close: 2.5046687506200826e21,
    low: 2.5046560286781625e21,
  },
  {
    open: 2.504675500042307e21,
    high: 2.504675500042307e21,
    close: 2.504675500042307e21,
    low: 2.504675500042307e21,
  },
  {
    open: 2.5046794323890526e21,
    high: 2.5046794323890526e21,
    close: 2.5046794323890526e21,
    low: 2.5046794323890526e21,
  },
  {
    open: 2.5047014906624753e21,
    high: 2.5047014906624753e21,
    close: 2.5047014906624753e21,
    low: 2.5047014906624753e21,
  },
  {
    open: 2.5047064487510734e21,
    high: 2.5047064487510734e21,
    close: 2.5047064487510734e21,
    low: 2.5047064487510734e21,
  },
  {
    open: 2.50470920324877e21,
    high: 2.5047126739199585e21,
    close: 2.5047126739199585e21,
    low: 2.50470920324877e21,
  },
  {
    open: 2.504713775721294e21,
    high: 2.504713775721294e21,
    close: 2.504713775721294e21,
    low: 2.504713775721294e21,
  },
  {
    open: 2.5047159793253357e21,
    high: 2.5047159793253357e21,
    close: 2.5047159793253357e21,
    low: 2.5047159793253357e21,
  },
  {
    open: 2.5047181829312254e21,
    high: 2.5047181829312254e21,
    close: 2.5047181829312254e21,
    low: 2.5047181829312254e21,
  },
  {
    open: 2.504718733832986e21,
    high: 2.504718733832986e21,
    close: 2.504718733832986e21,
    low: 2.504718733832986e21,
  },
  {
    open: 2.504721488343512e21,
    high: 2.504736417840634e21,
    close: 2.504736417840634e21,
    low: 2.504721488343512e21,
  },
  {
    open: 2.5047366657481213e21,
    high: 2.5047369136556406e21,
    close: 2.5047369136556406e21,
    low: 2.5047366657481213e21,
  },
  {
    open: 2.504737161563177e21,
    high: 2.504737161563177e21,
    close: 2.504737161563177e21,
    low: 2.504737161563177e21,
  },
  {
    open: 2.5047373764163986e21,
    high: 2.5047492341717213e21,
    close: 2.5047492341717213e21,
    low: 2.5047373764163986e21,
  },
  {
    open: 2.5047501877966684e21,
    high: 2.5047501877966684e21,
    close: 2.5047501877966684e21,
    low: 2.5047501877966684e21,
  },
  {
    open: 2.5047519507197807e21,
    high: 5.5047574598621116e21,
    close: 2.5047574598621116e21,
    low: 2.5047519507197807e21,
  },
  {
    open: 2.5047927499044306e21,
    high: 2.5047927499044306e21,
    close: 2.5047927499044306e21,
    low: 2.5047927499044306e21,
  },
];

export const prices = [
  {
    "timestamp": 1620248400000,
    "high": 3.0482211045024987e-12,
    "low": 3.0420331741444116e-12,
    "close": 3.0482211045024987e-12,
    "open": 3.0420331741444116e-12
  },
  {
    "timestamp": 1620249300000,
    "high": 3.052443706603611e-12,
    "low": 3.051083443544758e-12,
    "close": 3.052443706603611e-12,
    "open": 3.051083443544758e-12
  },
  {
    "timestamp": 1620250200000,
    "high": 3.058971994885798e-12,
    "low": 3.053301697638979e-12,
    "close": 3.058971994885798e-12,
    "open": 3.053301697638979e-12
  },
  {
    "timestamp": 1620251100000,
    "high": 3.0619150435330332e-12,
    "low": 3.0591052152995406e-12,
    "close": 3.0619150435330332e-12,
    "open": 3.0591052152995406e-12
  },
  {
    "timestamp": 1620252000000,
    "high": 3.062551448212578e-12,
    "low": 3.0624942591314255e-12,
    "close": 3.062551448212578e-12,
    "open": 3.0624942591314255e-12
  },
  {
    "timestamp": 1620252900000,
    "high": 3.0777357130785475e-12,
    "low": 3.0642196617996214e-12,
    "close": 3.064368586375334e-12,
    "open": 3.0642196617996214e-12
  },
  {
    "timestamp": 1620253800000,
    "high": 3.0569112254326672e-12,
    "low": 3.0569112254326672e-12,
    "close": 3.0569112254326672e-12,
    "open": 3.0569112254326672e-12
  },
  {
    "timestamp": 1620254700000,
    "high": 3.053931783734179e-12,
    "low": 3.0317150735664757e-12,
    "close": 3.0317150735664757e-12,
    "open": 3.053931783734179e-12
  },
  {
    "timestamp": 1620255600000,
    "high": 3.0372917675150144e-12,
    "low": 3.0372917675150144e-12,
    "close": 3.0372917675150144e-12,
    "open": 3.0372917675150144e-12
  },
  {
    "timestamp": 1620256500000,
    "high": 3.0386120996797003e-12,
    "low": 3.0386120996797003e-12,
    "close": 3.0386120996797003e-12,
    "open": 3.0386120996797003e-12
  },
  {
    "timestamp": 1620261000000,
    "high": 3.0404990351591258e-12,
    "low": 3.0404990351591258e-12,
    "close": 3.0404990351591258e-12,
    "open": 3.0404990351591258e-12
  },
  {
    "timestamp": 1620261900000,
    "high": 3.0547701056451405e-12,
    "low": 3.0429306594344523e-12,
    "close": 3.0547701056451405e-12,
    "open": 3.0429306594344523e-12
  },
  {
    "timestamp": 1620262800000,
    "high": 3.0737543374303936e-12,
    "low": 3.0737543374303936e-12,
    "close": 3.0737543374303936e-12,
    "open": 3.0737543374303936e-12
  },
  {
    "timestamp": 1620264600000,
    "high": 3.0770023498727197e-12,
    "low": 3.074909951263263e-12,
    "close": 3.0770023498727197e-12,
    "open": 3.074909951263263e-12
  },
  {
    "timestamp": 1620265500000,
    "high": 3.076334560147718e-12,
    "low": 3.076334560147718e-12,
    "close": 3.076334560147718e-12,
    "open": 3.076334560147718e-12
  }
]