import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getMany() {
    return { ok: 'getMany' };
  }

  getOne(id: number) {
    return { ok: 'getOne' };
  }

  editOne(id: number) {
    return { ok: 'editOne' };
  }

  deleteOne(id: number) {
    return { ok: 'deleteOne' };
  }

  createOne() {
    return { ok: 'createOne' };
  }
}
