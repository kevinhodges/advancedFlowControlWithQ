schema: "hotel" or "room"

| property | type | value/example | reason | mandatory? |
|---|---|---|---|---|
| alternateChipsHotelCodes.key | string |  | The schema to apply this logic to | false |
| alternateChipsHotelCodes.condition | string | lengthEven | When the alternate hotel logic should be applied | false |
| alternateChipsHotelCodes.code | string | ALTSSI | Another hotel code | false |
| alternateIds | array |  | Used in the "isResortHotel" design document, not sure what it's achieveing, we have "isResort" property on hotels and rooms | false |
| disallowedAgentCodes | array | ["LGD01", "CHE01"] | Prevents this hotel returning for these agent codes | false |
| disallowedTicketBuckets | array | ["ABC", "DEF"] | Prevents this hotel returning for these ticket buckets | false |
| disallowedTicketCodes | array | ["123", "456"] | Prevents this hotel returning for these ticket codes |  |
| displayName | string | Best Hotel |  | true |
| hotel | string | RESALT | If it's a "room" schema we need to link it to a "hotel" resource | false |
| interconnectingRoomsThatCannotBeSoldWithThisRoom | array |  |  | false |
| isCotConfirmationRequired | boolean | true | If true, will inform the consumer that they should confirm with the hotel that a cot is available before creating the order | |
| isOnStopSale | boolean | false | Is this hotel/room to be made available to consumers? |  |
| isResort | boolean |  |  | false |
| occupancyLimits.adults.minimum | numeric | 1 | Minimum number of adults required in this room | true |
| occupancyLimits.adults.maximum | numeric | 3 | Maximum number of adults allowed in this room | false |
| occupancyLimits.children.maximum | numeric | 3 | Maximum number of children allowed in this room | false |
| occupancyLimits.cots.maximum | numeric | 1 | Maximum number of cots allowed in this room | true |
| occupancyLimits.totalOccupants.maximum | numeric | 1 | Describe how many people fit into this room | true |
| operaCode | string | ATH-MOO4 | Concatenation of the Opera property code and room code | false |
| roomsThatCannotBeSoldWithThisRoom | array |  |  | false |
|  |  |  |  |  |
