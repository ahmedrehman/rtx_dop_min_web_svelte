// src/lib/services/DummyService.ts
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const BASE_CACHE_DIR = path.resolve('tmp');
const IMAGE_CACHE_DIR = path.join(BASE_CACHE_DIR, 'dummy-image-cache');
const JSON_CACHE_DIR = path.join(BASE_CACHE_DIR, 'dummy-json-cache');

export class DummyService {
  // ========== CACHE UTILS ==========
  private static ensureCacheDir(base: string) {
    if (!fs.existsSync(base)) fs.mkdirSync(base, { recursive: true });
  }

  private static getCachedFiles(base: string, key: string): string[] {
    this.ensureCacheDir(base);
    const dir = path.join(base, key);
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).map(file => path.join(dir, file));
  }

  private static async saveFileFromUrl(base: string, url: string, key: string, ext = 'jpg'): Promise<string> {
    this.ensureCacheDir(base);
    const dir = path.join(base, key);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    const files = fs.readdirSync(dir);
    if (files.length >= 10) {
      return path.join(dir, files[Math.floor(Math.random() * files.length)]);
    }
    const res = await fetch(url);
    const buffer = await res.buffer();
    const filename = `${Date.now()}.${ext}`;
    const filepath = path.join(dir, filename);
    fs.writeFileSync(filepath, buffer);
    return filepath;
  }

  private static async saveJson(base: string, key: string, data: any): Promise<any> {
    this.ensureCacheDir(base);
    const dir = path.join(base, key);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    const files = fs.readdirSync(dir);
    if (files.length >= 10) {
      const file = files[Math.floor(Math.random() * files.length)];
      return JSON.parse(fs.readFileSync(path.join(dir, file), 'utf-8'));
    }
    const filename = `${Date.now()}.json`;
    const filepath = path.join(dir, filename);
    fs.writeFileSync(filepath, JSON.stringify(data));
    return data;
  }

  // ========== IMAGES ==========

  static async dummy_image_placeholder(width = 150, height = 150, impl = 1) {
    const key = `placeholder_${width}_${height}_${impl}`;
    const existing = this.getCachedFiles(IMAGE_CACHE_DIR, key);
    if (existing.length >= 10) {
      return existing[Math.floor(Math.random() * existing.length)];
    }

    let url = '';
    if (impl === 1) url = `https://via.placeholder.com/${width}x${height}`;
    else if (impl === 2) url = `https://picsum.photos/${width}/${height}`;
    else if (impl === 3) url = `https://placekitten.com/${width}/${height}`;

    return await this.saveFileFromUrl(IMAGE_CACHE_DIR, url, key);
  }

static async dummy_image_person_avatar(id = 1, gender = 'men', fullName = 'John Doe', email = 'john@example.com', impl = 1) {
    const key = `person_avatar_${impl}`;
    const existing = this.getCachedFiles(IMAGE_CACHE_DIR, key);
    if (existing.length >= 10) {
      return existing[Math.floor(Math.random() * existing.length)];
    }

    let url = '';
    if (impl === 1) url = `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;
    else if (impl === 2) url = `https://i.pravatar.cc/150?img=${id}`;
    else if (impl === 3) url = `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}`;
    else if (impl === 4) url = `https://www.avatarapi.com/js.aspx?email=${email}&size=128`;

    return await this.saveFileFromUrl(IMAGE_CACHE_DIR, url, key);
  }

static async dummy_image_by_topic(topic: string, width = 400, height = 300, impl = 1): Promise<string> {
    const key = `${topic}_${width}_${height}_${impl}`;
    const existing = this.getCachedFiles(IMAGE_CACHE_DIR, key);
    if (existing.length >= 10) {
      return existing[Math.floor(Math.random() * existing.length)];
    }

    let url = '';
    if (impl === 1) {
      url = `https://source.unsplash.com/${width}x${height}/?${encodeURIComponent(topic)}`;
    } else if (impl === 2) {
      url = `https://loremflickr.com/${width}/${height}/${encodeURIComponent(topic)}`;
    } else if (impl === 3) {
      url = `https://picsum.photos/seed/${encodeURIComponent(topic)}/${width}/${height}`;
    }

    return await this.saveFileFromUrl(IMAGE_CACHE_DIR, url, key);
  }

  // ========== TEXT ==========

  static async dummy_text_paragraph(impl = 1) {
    const key = `paragraph_${impl}`;
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
    return await this.saveJson(JSON_CACHE_DIR, key, { text });
  }

  // ========== DATA ==========

  static async dummy_data_user_basic(impl = 1) {
    const key = `user_${impl}`;
    let data = {};

    if (impl === 1) {
      const res = await fetch('https://dummyjson.com/users/1');
      const user = await res.json() ;
      data = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.image
      };
    } else if (impl === 2) {
      const res = await fetch('https://fakerapi.it/api/v1/users?_quantity=1');
      const api = await res.json();
      const user = api.data[0];
      data = {
        firstName: user.firstname,
        lastName: user.lastname,
        email: user.email,
        username: user.username
      };
    } else if (impl === 3) {
      const res = await fetch('https://randomuser.me/api/');
      const api = await res.json();
      const user = api.results[0];
      data = {
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        avatar: user.picture.large,
        username: user.login.username
      };
    }

    return await this.saveJson(JSON_CACHE_DIR, key, data);
  }
}
