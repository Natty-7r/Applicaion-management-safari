import { OmitType } from '@nestjs/swagger'
import QueryDto from './query.dto'

export default class PageQueryDto extends OmitType(QueryDto, [
  'itemsPerPage',
]) {}
