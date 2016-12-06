schema: "hotel" or "room"

| property | type | value/example | reason | mandatory? |
|---|---|---|---|---|
| alternateChipsHotelCodes.key | string |  |  | false |
| alternateChipsHotelCodes.condition | string |  |  | false |
| alternateChipsHotelCodes.code | string | ALTSSI | Another hotel code | false |
| alternateIds | array |  |  |  |
| disallowedAgentCodes | array |  |  |  |
| disallowedTicketBuckets | array |  |  |  |
| disallowedTicketCodes | array |  |  |  |
| displayName | string | Best Hotel |  | false |
| hotel | string | RESALT | If it's a "room" schema we need to link it to a "hotel" resource | false |
| interconnectingRoomsThatCannotBeSoldWithThisRoom | array |  |  | false |
| isCotConfirmationRequired | | | | |
| isOnStopSale | boolean |  |  |  |
| isResort | boolean |  |  | false |
| occupancyLimits.adults.minimum | numeric | 1 | Minimum number of adults required in this room | true |
| occupancyLimits.adults.maximum | numeric | 3 | Maximum number of adults allowed in this room | false |
| occupancyLimits.children.maximum | numeric | 3 | Maximum number of children allowed in this room | false |
| occupancyLimits.cots.maximum | numeric | 1 | Maximum number of cots allowed in this room | true |
| occupancyLimits.totalOccupants.maximum | numeric | 1 | Describe how many people fit into this room | true |
| operaCode | string | ATH-MOO4 | Concatenation of the Opera propery code and room code | false |
| roomsThatCannotBeSoldWithThisRoom | array |  |  | false |
|  |  |  |  |  |
